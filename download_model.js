import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const modelUrl = 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/gaming-desktop-pc/model.gltf';
const texturesUrls = [
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/gaming-desktop-pc/textures/Material.001_baseColor.jpeg',
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/gaming-desktop-pc/textures/Material.001_metallicRoughness.png',
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/gaming-desktop-pc/textures/Material.001_normal.png',
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/gaming-desktop-pc/textures/Material.002_baseColor.jpeg',
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/gaming-desktop-pc/textures/Material.002_metallicRoughness.png',
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/gaming-desktop-pc/textures/Material.002_normal.png',
];

const publicPath = path.join(__dirname, 'public', 'desktop_pc');
const texturesPath = path.join(publicPath, 'textures');

// Create directories if they don't exist
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}
if (!fs.existsSync(texturesPath)) {
  fs.mkdirSync(texturesPath, { recursive: true });
}

// Download file function
const downloadFile = (url, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (error) => {
      fs.unlink(destination, () => {
        reject(error);
      });
    });
  });
};

// Download model and textures
async function downloadAssets() {
  try {
    console.log('Downloading 3D model...');
    await downloadFile(modelUrl, path.join(publicPath, 'scene.gltf'));

    console.log('Downloading textures...');
    for (const textureUrl of texturesUrls) {
      const fileName = path.basename(textureUrl);
      await downloadFile(textureUrl, path.join(texturesPath, fileName));
      console.log(`Downloaded ${fileName}`);
    }

    console.log('All assets downloaded successfully!');
  } catch (error) {
    console.error('Error downloading assets:', error);
  }
}

downloadAssets();
