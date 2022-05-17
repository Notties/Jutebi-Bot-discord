require("dotenv").config()

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () =>{
    console.log("Our bot is ready to go");
})

client.on("message", msg => {
    // check if the message is ping
    if (msg.content === "ping") {
      // if the message is ping, reply with pong
      msg.reply("pong!");
    }
  })

client.login(process.env.BOT_TOKEN)