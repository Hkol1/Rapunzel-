const config = require('../config');

module.exports = {
  name: 'alive',
  alias: ['bot', 'rapunzel'],
  description: 'Check bot status',
  category: 'general',

  async run(client, m, args) {
    const aliveMessage = `
👑 *config.botName is Alive!*
╭─────────────◆
│ 🤖 *Bot Name:*{config.botName}
│ 👤 *Owner:* config.ownerName
│ 📞 *Owner Number:* wa.me/{config.ownerNumber}
│ 💻 *Status:* Online ✅
│ 🕐 *Uptime:* (process.uptime() / 60).toFixed(2) min
│ 📍 *Prefix:*{config.prefix}
╰─────────────◆
🔰 Powered by Rapunzel MD
    `.trim();

    const imageBuffer = await client.prepareMessageFromContent(
      m.key.remoteJid,
      {
        imageMessage: {
          url: 'https://ibb.co/cqy9nKh', // Optional: Replace with your bot's logo/image URL
          caption: aliveMessage
        }
      },
      {}
    );

    await client.relayWAMessage(imageBuffer);
