import fs from 'fs';
import path from 'path';
import https from 'https';

const PUBLIC_IMG_DIR = path.join(process.cwd(), 'public', 'images', 'optimized');

if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

// Map of Unsplash URLs to local filenames
const IMAGE_MAP = {
  // Hero & General
  'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74': 'hero_defense_tech.webp',
  'https://images.unsplash.com/photo-1561233835-f937539b95b9': 'bfsi_banking.webp',
  'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85': 'cloud_autonomous.webp',
  'https://images.unsplash.com/photo-1601785491008-d1153dfadd57': 'energy_grid.webp',
  'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd': 'healthcare_interop.webp',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d': 'logistics_supply.webp',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44': 'bfsi_vertical.webp',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe': 'ai_solutions.webp',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8': 'retail_commerce.webp',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d': 'healthcare_lifesciences.webp',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8': 'cloud_telecom.webp',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3': 'cyber_defense.webp',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa': 'cloud_modernization.webp',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c': 'digital_transformation.webp',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71': 'data_analytics.webp',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f': 'finops_economics.webp',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b': 'secops_sovereign.webp',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d': 'avatar_1.webp',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2': 'avatar_2.webp',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb': 'avatar_3.webp',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7': 'avatar_4.webp',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956': 'avatar_5.webp',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e': 'avatar_6.webp',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6': 'avatar_7.webp',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9': 'avatar_8.webp',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1': 'avatar_9.webp',
};

function downloadImage(urlKey, filename) {
  return new Promise((resolve, reject) => {
    const targetPath = path.join(PUBLIC_IMG_DIR, filename);
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 1000) {
      console.log(`Already exists: ${filename}`);
      return resolve(filename);
    }

    // Unsplash webp compressed URL (q=75, w=1000, fm=webp)
    const downloadUrl = `${urlKey}?crop=entropy&cs=srgb&fm=webp&q=75&w=1000`;
    console.log(`Downloading & Compressing: ${filename}...`);

    https.get(downloadUrl, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (redirectRes) => {
          const fileStream = fs.createWriteStream(targetPath);
          redirectRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Saved: ${filename} (${fs.statSync(targetPath).size} bytes)`);
            resolve(filename);
          });
        }).on('error', reject);
      } else {
        const fileStream = fs.createWriteStream(targetPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Saved: ${filename} (${fs.statSync(targetPath).size} bytes)`);
          resolve(filename);
        });
      }
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading and compressing all website images to local public/images/optimized/...');
  for (const [urlKey, filename] of Object.entries(IMAGE_MAP)) {
    try {
      await downloadImage(urlKey, filename);
    } catch (err) {
      console.error(`Failed for ${filename}:`, err);
    }
  }
  console.log('All images downloaded & compressed locally!');
}

main();
