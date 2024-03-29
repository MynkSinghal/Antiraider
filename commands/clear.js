module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have enough perms to use this command')
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send('Please indicate a number of messages to delete/purge.')
        if (count < 1 || count > 99) return message.channel.send('The number of messages should be between 1 and 99.')
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(`${size - 1} messages have been deleted!!`).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'clear',
    guildOnly: true
}
