const Discord = require("discord.js");
const client = new Discord.Client();




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("You",{type: 'listening'});
  
  });
  
client.login("NDE5MzE3ODY0MDA1MjM4Nzg1.DeEYiQ.KV3hEqBcMn8RJhpL7mCMyRMxrb4")