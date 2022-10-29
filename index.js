require("dotenv").config();
const schedule = require('node-schedule');
const { victoryBrideTime } = require("./utils/get_date.js");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// GuildID 1035643754251567136

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  schedule.scheduleJob("0 0 * * *", () => {
    // channal that notify the [Arena time]

    var arenaChannel = client.channels.cache.get("1035961848706646116");
    arenaChannel.setName(`[10-10]: ${victoryBrideTime}`);
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
