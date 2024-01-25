"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { YamlDatabase } = require("five.db");
const db = new YamlDatabase({databasePath:"./database.yml"});
const { Collection } = require("@discordjs/collection")
/* Coded By Beş And Relivent */

/**
 * @typedef {Class} InviteManager
 * @see {InviteManager}
 * @example const inviteManager = new InviteManager();
 * @type {Class}
 */
module.exports = class InviteManager {
constructor(client) {
    if(!client) throw new Error('InviteTracker: client is not defined!');
    if(client.guilds.size <= 0) return console.error('InviteTracker: client is not connected to any guilds!');

const invites = client.invites = new Collection();
client.on("ready", async () => {
    let collect = new Collection();
    
    client.guilds.cache.forEach(async (guild) => {
          if(!guild.members.me.permissions.has("ManageGuild")) {
     console.log("I didn't have permission in following Guild To Setup Invite System" + `${guild.name} : ${guild.id}`)
              return;
}
        guild.invites.fetch().then((bes) => {
            bes.map((x) => { collect.set(x.code, { uses: x.uses, inviter: x.inviter, code: x.code, guildID: guild.id }) });
            client.invites.set(guild.id, collect);
        });
    })
})
client.on("inviteCreate", async (invite) => {
    let collect = new Collection();
    client.guilds.cache.forEach(async (guild) => {
        guild.invites.fetch().then((bes) => {
            bes.map((x) => { collect.set(x.code, { uses: x.uses, inviter: x.inviter, code: x.code, guildID: guild.id }) });
            client.invites.set(guild.id, collect);
        });
    })
})
client.on("inviteDelete", async (invite) => {
    let collect = new Collection();
    client.guilds.cache.forEach(async (guild) => {
        guild.invites.fetch().then((bes) => {
            bes.map((x) => { collect.set(x.code, { uses: x.uses, inviter: x.inviter, code: x.code, guildID: guild.id }) });
            client.invites.set(guild.id, collect);
        });
    })
})
client.on("guildMemberAdd", async (member) => {
    const fetchInvites = client.invites.get(member.guild.id) || new Collection();
    const invites = await member.guild.invites.fetch();
    const invite = invites.find((bes) => fetchInvites.has(bes.code) && bes.uses > fetchInvites.get(bes.code).uses) || fetchInvites.find((bes) => !invites.has(bes.code)) || member.guild.vanityURLCode;
    var vanityURL = await member.guild.fetchVanityData().catch(err=>{ vanityURL = "Server Not Level 3 Or I Don't Have Manage Guild Privileges"});
      /**
         * client.on('memberJoin',member,inviter,invite)
         * @param {object} member information of the member joining the server.
         * @param {object} inviter information of the inviter to the server.
         * @param {object} member invitation information.
         * @property memberJoin
         * @returns {client}
        */
    if (invite == null || invite == undefined || !invite) {
        client.emit("memberJoin", member, null, null)
    } else if (invite == member.guild.vanityURLCode) {
        client.emit("memberJoin", member, member.guild.vanityURLCode, vanityURL)
        db.set(`inviter-${member.id}`, { inviter: member.guild.vanityURLCode, code: invite.code, uses: invite.uses })
    } else if (invite.inviter.id == member.user.id) {
        client.emit("memberJoin", member, member, invite)
        db.set(`inviter-${member.id}`, { inviter: member.id, code: invite.code, uses: invite.uses })
    } else {
        let inviter;
        try { inviter = await client.users.fetch(invite.inviter.id) }
        catch (err) { inviter = undefined }
        client.emit("memberJoin", member, inviter, invite)
        db.set(`inviter-${member.id}`, { inviter: invite.inviter.id, code: invite.code, uses: invite.uses })
    }
})
client.on("guildMemberRemove", async (member) => {
    let invite = db.get(`inviter-${member.id}`);
    /**
         * client.on('memberLeave',member,inviter,invite)
         * @param {object} member information of the member leaving the server.
         * @param {object} inviter information of the inviter to the server.
         * @param {object} member invitation information.
         * @property memberLeave
         * @returns {client}
        */
    if (invite == null || invite == undefined || !invite) {
        client.emit("memberLeave", member, null, null)
    } else if (invite.inviter == member.guild.vanityURLCode) {
        client.emit("memberLeave", member, member.guild?.vanityURLCode ? member.guild.vanityURLCode : invite, invite)
        db.delete(`inviter-${member.id}`)
    } else if (invite.inviter == member.user.id) {
        client.emit("memberLeave", member, member, invite)
        db.delete(`inviter-${member.id}`)
    } else {
        let inviter;
        try { inviter = await client.users.fetch(invite.inviter) }
        catch (err) { inviter = undefined }
        client.emit("memberLeave", member, inviter, invite)
        db.delete(`inviter-${member.id}`)
    }
})
};


/**
  * inviteAdd()
  * @example inviteAdd(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param user - Discord User<Object>
  * @type {string} guildId
  * @type {object} user
  * @returns {InviteManager} 
  */
inviteAdd(guildId, user){
    if(!user?.id) return;
const dbDatas = db.get("guild-invites-"+guildId) || [];
const memberDbData = dbDatas.find(d => d.user === user.id);
  db.set("guild-invites-"+guildId, [...dbDatas.filter(m => m.user !== user.id), { user: user.id, invites: memberDbData?.invites ? memberDbData.invites+1 : 1 }]);
};


/**
  * inviteRemove()
  * @example inviteAdd(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param user - Discord User<Object>
  * @type {string} guildId
  * @type {object} user
  * @returns {InviteManager} 
  */
inviteRemove(guildId, user){
    if(!user?.id) return;
const dbDatas = db.get("guild-invites-"+guildId) || [];
const memberDbData = dbDatas.find(d => d.user === user.id);
  db.set("guild-invites-"+guildId, [...dbDatas.filter(m => m.user !== user.id), { user: user.id, invites: memberDbData?.invites && memberDbData.invites >= 1 ? memberDbData.invites-1 : 0 }]);
};


 /**
  * getMemberInvites()
  * @example getMemberInvites(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param user - Discord User<Object>
  * @type {string} guildId
  * @type {object} user
  * @returns {InviteManager} 
  */
getMemberInvites(guildId, user) {
    if(!user?.id) return;
const dbDatas = db.get("guild-invites-"+guildId) || [];
const memberDbData = dbDatas.find(d => d.user === user.id) || { user: user.id, invites: 0 };
  return memberDbData;
};


/**
  * getGuildInvites()
  * @example getGuildInvites(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param limit - Data Slice Limit<number>
  * @type {string} guildId
  * @type {number} limit
  * @returns {InviteManager} 
  */
getGuildInvites(guildId,limit=10) {
    if(typeof limit !== "number") limit = 10;
    if(limit < 1) limit = 10;
    if(limit >= 50) limit = 50;
const dbDatas = db.get("guild-invites-"+guildId) || [];
const memberDbData = dbDatas.sort((a,b) => b.invites-a.invites).slice(0, limit) || [];
  return memberDbData;
};
};
