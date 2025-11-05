const config = require('../config');

module.exports = {
  name: 'restart',
  alias: ['reboot', 'rs'],
  description: 'Restart the bot',
  category: 'owner',

  async run(client, m, args) {
    // Check if sender is owner
    if (m.sender !== config.ownerNumber + '@s.whatsapp.net') {
      return client.sendMessage(
        m.chat,
        { text: '❌ Only the bot owner can restart the bot!' },
        { quoted: m }
      );
    }

    await client.sendMessage(
      m.chat,
      { text: '⚡ Restarting Rapunzel MD Bot... Please wait!' },
      { quoted: m }
    );

    console.log('⚡ Bot is restarting by owner command...');

    // Optional delay before exit
    setTimeout(() => {
      process.exit(0); // Bot process will exit, PM2 / nodemon can auto-restart
    }, 2000);
  }
};
```
