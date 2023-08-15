<p align="center"> <a href="#"> <img width=500 src="https://github.com/Bes-js/discord-invite/blob/main/discord-invite-logo.png?raw=true"></a></p> 
<p align="center"><a href="https://nodei.co/npm/discord-invite/"><img src="https://nodei.co/npm/discord-invite.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/discord-invite?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/Bes-js/discord-invite?style=for-the-badge"> <img src="https://img.shields.io/npm/l/discord-invite?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/discord-invite?style=for-the-badge"> <img src="https://img.shields.io/github/contributors/Bes-js/discord-invite?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/discord-invite/@discordjs/collection?style=for-the-badge"> <a href="https://discord.gg/luppux" target="_blank"> <img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/discord-invite/five.d?style=for-the-badge"> <a href="https://discord.gg/luppux" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a></p>

# [discord-invite](https://discord.gg/luppux)

> **Track the invites in your servers to know who invited who and with which invite!**

#
### ❔ [Support](https://discord.gg/luppux)
### 📂 [NPM](https://npmjs.com/discord-invite)
### 📝 [Github](https://github.com/Bes-js/discord-invite)

#
# Installation

```bash
npm i discord-invite
```
#
# Quick Example
 
**Example For CommonJS**
```js
/* Importing The Package */
const InviteManager = require('discord-invite');
const invClient = new InviteManager(client); // client = Discord.Client();

```
#
**Events**
```js
/* Guild Member Join Event */
client.on("memberJoin",async(member,inviter,invite) => { });

/* Guild Member Leave Event */
client.on("memberLeave",async(member,inviter,invite) => { });
```
#
**Functions**
```js
const InviteManager = require('discord-invite');
const { Client } = require("discord.js");
const invClient = new InviteManager(client);

invClient.inviteAdd(guildId, user); /* <null> */
invClient.inviteRemove(guildId, user); /* <null> */
invClient.getMemberInvites(guildId, user); /* <Object> */
invClient.getGuildInvites(guildId, limit); /* <Array> - limit = min 1 / max 50 / default 10 */
```
#
**Example Usage;**
```js
const InviteManager = require('discord-invite');
const { Client } = require("discord.js");
const invClient = new InviteManager(client); // client = Discord.Client();


/* Join Event */

client.on("memberJoin", async function(member, inviter, invite) {
if(!inviter) {
  console.log(`${member.user.username} joined the server, but I couldn't find out who was invited.`);
} else if(member.id == inviter.id) {
  console.log(`${member.user.username} Joined the server by his own invitation!`);
}else if(member.guild.vanityURLCode == inviter) {
  console.log(`${member.user.username} Joined Server Using Vanity URL!`);
} else {
  invClient.inviteAdd(member.guild.id, inviter);
  console.log(`${member.user.tag} Joined the server! inviter ${inviter.username}`);
};
});

/* Leave Event */

client.on("memberLeave",async(member,inviter,invite) => { 
if(!inviter) {
 console.log(`${member.user.tag} Lefted the server, but I couldn't find out who was invited.`);
} else if(member.id == inviter.id) {
 console.log(`${member.user.tag} Lefted the server by his own invitation!`);
} else if(member.guild.vanityURLCode == inviter) {
 console.log(`${member.user.tag} Lefted Server Using Vanity URL!`);
} else {
 invClient.inviteRemove(member.guild.id, inviter);
 console.log(`${member.user.tag} Lefted the server! inviter ${inviter.tag}`);
};
});


client.login("your secret bot token 👻")
```
**[discord-invite](https://discord.gg/luppux) Also Supports TypeScript And EsModule 🥳!**

#
# Credits
 
**Made by [FiveSoBes](https://github.com/Bes-js), [Relivent](https://github.com/Relivent) And [Luppux Development](https://github.com/Luppux)**


# Contact & Support & Donate
<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)