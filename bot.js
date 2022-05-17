require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const bot_prefix = "!";
const mod_me_command = "mod-me";

client.on("ready", () => {
  console.log("Our bot is ready to go!");
});

client.on("messageDelete", msg => {
    //
})

client.on("message", (msg) => {
    if (msg.content === "i love jutebi") {
        msg.react('❤️');
      }

  if (msg.content === "ping") {
    msg.reply("pong!");
  }
  if (msg.content === `${bot_prefix}${mod_me_command}`) {
    modUser(msg.member)
  }
});

function modUser(member) {
    member.roles.add("819244009188491355");
}

client.login(process.env.BOT_TOKEN);
