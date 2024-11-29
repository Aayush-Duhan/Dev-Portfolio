import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json';
const fontDir = path.join(__dirname, 'public', 'fonts');
const fontPath = path.join(fontDir, 'helvetiker_regular.typeface.json');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontDir)) {
  fs.mkdirSync(fontDir, { recursive: true });
}

// Download the font file
https.get(fontUrl, (response) => {
  const file = fs.createWriteStream(fontPath);
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Font downloaded successfully!');
  });
}).on('error', (err) => {
  console.error('Error downloading font:', err.message);
});
