<h6 align="center">
<img src="https://github.com/Bes-js/discord-invite/blob/main/discord-invite-logo.png?raw=true" width="620px" height="160px" alt="stats" align="center">
<h6/>

<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>

![npm version](https://img.shields.io/npm/v/moviex?color=blue&label=npm%20i%20discord-invite&logo=npm&style=flat)
![npm info](https://img.shields.io/npm/dw/discord-invite?color=blue)


# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=FF0000&repeat=false&width=435&lines=%E2%9D%94+How+To+Install%3F)](#)

To Install the `discord-invite` module, open a console and write the code below.
<br> </br>
For **npm**
```console
npm i discord-invite
```

For **Yarn**
```console
yarn add discord-invite
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=00EDFF&repeat=false&width=435&lines=%F0%9F%8E%AF+Describing)](#)

For **CommonJS**
```javascript
const { InviteTracker } = require("discord-invite");
InviteTracker(client);
```

For **ES6**
```javascript
import { InviteTracker } from "discord-invite";
InviteTracker(client);
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=blue&repeat=false&width=435&lines=✨+Events+&+Usage)](#)

```javascript
// Guild Member Join Event
client.on("memberJoin",async(member,inviter,invite) => { })

// Guild Member Leave Event
client.on("memberLeave",async(member,inviter,invite) => { })
```
# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=blue&repeat=false&width=435&lines=🪄+Example+Codes)](#)
```js
const { Client } = require("discord.js")
const client = new Client({intents: Object.keys(GatewayIntentBits),partials:Object.keys(Partials)});

const { InviteTracker } = require("discord-invite");
InviteTracker(client);

// Join Event
client.on("memberJoin",async(member,inviter,invite) => { 
if(inviter == null){
console.log(`${member.user.tag} joined the server, but I couldn't find out who was invited.`)
}else
if(member.id == inviter.id){
console.log(`${member.user.tag} Joined the server by his own invitation!`)
}else
if(member.guild.vanityURLCode == inviter){
console.log(`${member.user.tag} Joined Server Using Vanity URL!`)
}else
{
console.log(`${member.user.tag} Joined the server! inviter ${inviter.tag}`)
}
})


// Leave Event
client.on("memberLeave",async(member,inviter,invite) => { 
if(inviter == null){
console.log(`${member.user.tag} Lefted the server, but I couldn't find out who was invited.`)
}else
if(member.id == inviter.id){
console.log(`${member.user.tag} Lefted the server by his own invitation!`)
}else
if(member.guild.vanityURLCode == inviter){
console.log(`${member.user.tag} Lefted Server Using Vanity URL!`)
}else
{
console.log(`${member.user.tag} Lefted the server! inviter ${inviter.tag}`)
}
})

```


<br> <br/>
# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=9D06E6&repeat=false&width=435&lines=API+Token+%26+Support+%26+Donate)](#)

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)
<br> </br>
<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>
