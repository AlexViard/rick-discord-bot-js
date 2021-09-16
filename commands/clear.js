const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Supprimez jusqu\'à 99 messages.')
		.addIntegerOption(option => option.setName('valeur').setDescription('Nombre de messages à supprimer')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('valeur');

		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'Vous devez saisir un nombre entre 1 et 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Une erreur s\'est produite lors de la tentative de suppression des messages sur ce channel!', ephemeral: true });
		});

		return interaction.reply({ content: `${amount}\ message(s) supprimé(s).`, ephemeral: true });
	},
};