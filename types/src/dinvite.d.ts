export = InviteManager;

/**
 * @typedef {Class} InviteManager
 * @see {InviteManager}
 * @example const inviteManager = new InviteManager();
 * @type {Class}
 */

declare class InviteManager {
  data: InviteManagerData;

 /**
  * inviteAdd()
  * @example inviteAdd(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param user - Discord User<Object>
  * @type {string} guildId
  * @type {object} user
  * @returns {InviteManager} 
  */
  inviteAdd(guildId: string, user: object):InviteManager;

  /**
  * inviteRemove()
  * @example inviteAdd(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param user - Discord User<Object>
  * @type {string} guildId
  * @type {object} user
  * @returns {InviteManager} 
  */
  inviteRemove(guildId: string, user: object):InviteManager;


  /**
  * getMemberInvites()
  * @example getMemberInvites(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param user - Discord User<Object>
  * @type {string} guildId
  * @type {object} user
  * @returns {InviteManager} 
  */
  getMemberInvites(guildId: string, user: object):InviteManager;

  /**
  * getGuildInvites()
  * @example getGuildInvites(member.guild.id,inviter);
  * @param guildId - Server ID<string> 
  * @param limit - Data Slice Limit<number>
  * @type {string} guildId
  * @type {number} limit
  * @returns {InviteManager} 
  */
  getGuildInvites(guildId: string, limit: number):InviteManager;

}
declare namespace InviteManager { export { InviteManagerData }; }

type InviteManagerData = {};
//# sourceMappingURL=dinvite.d.ts.map