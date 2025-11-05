
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

// 🎵 Download YouTube video as MP4
async function downloadYtVideo(url, outputDir = './downloads') {
  if (!ytdl.validateURL(url)) throw new Error('❌ Invalid YouTube URL');

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title.replace(/[\\/:*?"<>|]/g, '');
  const filePath = path.join(outputDir, `${title}.mp4`);

  return new Promise((resolve, reject) => {
    ytdl(url, { quality: '18' })
      .pipe(fs.createWriteStream(filePath))
      .on('finish', () => resolve({ title, filePath }))
      .on('error', (err) => reject(err));
  });
}

// 🎶 Download YouTube audio as MP3
async function downloadYtAudio(url, outputDir = './downloads') {
  if (!ytdl.validateURL(url)) throw new Error('❌ Invalid YouTube URL');

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title.replace(/[\\/:*?"<>|]/g, '');

const filePath = path.join(outputDir, `{title}.mp3`);

  return new Promise((resolve, reject) => {
    ytdl(url, { filter: 'audioonly' })
      .pipe(fs.createWriteStream(filePath))
      .on('finish', () => resolve({ title, filePath }))
      .on('error', (err) => reject(err));
  });
}

module.exports = {
  downloadYtVideo,
  downloadYtAudio
};
```

---

🔹 Usage Example in `index.js`

```js
const { downloadYtVideo, downloadYtAudio } = require('./lib/song-video');

app.post('/ytmp4', async (req, res) => {
  const { url } = req.body;
  try {
    const video = await downloadYtVideo(url);
    res.download(video.filePath, `video.title.mp4`);
   catch (err) 
    res.status(500).send('❌ Error downloading video');
  );

app.post('/ytmp3', async (req, res) => 
  const  url  = req.body;
  try 
    const audio = await downloadYtAudio(url);
    res.download(audio.filePath, `{audio.title}.mp3`);
  } catch (err) {
    res.status(500).send('❌ Error downloading audio');
  }
});
```

---
