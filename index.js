const dotenv = require('dotenv');
dotenv.config();
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES
] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', (message) => {
	if (message.content === 'ping') {
		message.reply({
			content: 'pong',
		})
	}
})

// Login to Discord with your client's token
client.login(process.env.TOKEN);
