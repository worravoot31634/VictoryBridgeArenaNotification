require("dotenv").config();
const schedule = require("node-schedule");
const { victoryBrideTime } = require("./utils/get_date.js");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

var delayInMilliseconds = 5000; //5 second

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  schedule.scheduleJob("0 0 * * *", () => {
    console.log("Update arena time from scedule");
    // channal that notify the [Arena time]
    setTimeout(function () {
      var arenaChannel = client.channels.cache.get("1035961848706646116");
      arenaChannel.setName(`[10-10]: ${victoryBrideTime}`);
    }, delayInMilliseconds);
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "arena") {
    await interaction.reply(`[10-10]: ${victoryBrideTime}`);

    interaction.guild.channels
      .edit("1035961848706646116", { name: `[10-10]: ${victoryBrideTime}` })
      .then(console.log(`[UPDATED] Arena time to [10-10]: ${victoryBrideTime}`))
      .catch(console.error);
  }
});

client.login(process.env.DISCORD_TOKEN);
