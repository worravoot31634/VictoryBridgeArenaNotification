const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    name: "arena",
    description: "Replies arena time",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationCommands(
        process.env.CLIENT_ID,
        process.env.CHANEL_BOT_TEXT_ID
      ),
      { body: commands }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
