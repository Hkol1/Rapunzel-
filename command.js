js
module.exports = {
  menu: `
╭──❒ *📥 𝙍𝘼𝙋𝙐𝙉𝙕𝙀𝙇 𝙈𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎* ❒
│
│ 💜 *Downloader Commands*
│ ├ 💠 .ytmp4 [link]
│ ├ 💠 .tiktok [link]
│ ├ 💠 .mediafire [link]
│ ├ 💠 .fb [link]
│ ├ 💠 .likee [link]
│ ├ 💠 .pindl [link]
│
│ 💜 *Audio/Video*
│ ├ 🎵 .play2 [song name]
│ ├ 🎧 .song [name]
│ ├ 🎬 .ytvideo [link]
│
│ 💜 *Others*
│ ├ 🧠 .gitclone [repo]
│ ├ 📦 .apk [name]
│ ├ 🖼️ .img [url]
│ ├ 🎨 .logo [text]
│
╰──❒ Powered by *Rapunzel MD*
`
};
```

---

✅ භාවිතය:

```js
const { menu } = require('./command');

// Example: send menu to user
client.sendMessage(chatId, menu);
```

---
