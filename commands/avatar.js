const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Obtenez l\'URL de l\'avatar de l\'utilisateur sélectionné, ou votre propre avatar.')
		.addUserOption(option => option.setName('utilisateur').setDescription('L\'avatar de l\'utilisateur à afficher')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`L'avatar de ${user.username} est : ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Votre avatar est : ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};