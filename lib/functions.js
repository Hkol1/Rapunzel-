const axios = require('axios');
const cheerio = require('cheerio');

// 🫀 Validate URL
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

// 🖨️ YouTube Title Extractor (optional)
async function getYouTubeTitle(url) {
  try {
    const { data } = await axios.get(url);
    const = cheerio.load(data);
    return('title').text();
  } catch {
    return 'Unknown Title';
  }
}

// 🔍 Mediafire Downloader
async function getMediafireLink(url) {
  try {
    const { data } = await axios.get(url);
    const directLink = data.match(/https?:\/\/download[^"]+/)?.[0];
    const fileName = data.match(/\/([^\/]+\.zip|\.mp4|\.mp3|\.apk|\.pdf)/)?.[1];
    return {
      url: directLink || null,
      name: fileName || 'Unknown',
    };
  } catch {
    return { url: null, name: null };
  }
}

// 🔗 Shorten URL
async function shorten(url) {
  try {
    const res = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    return res.data;
  } catch {
    return url;
  }
}

module.exports = {
  isValidUrl,
  getYouTubeTitle,
  getMediafireLink,
  shorten,
};
```
