const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Afficher les informations sur ce serveur.'),
	async execute(interaction) {
		return interaction.reply(`Nom du serveur: ${interaction.guild.name}\nMembres total: ${interaction.guild.memberCount}`);
	},
};