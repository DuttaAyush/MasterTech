import fs from 'fs';
import path from 'path';

const REPLACEMENTS = [
  { match: /https:\/\/images\.unsplash\.com\/photo-1615225164633-69f53b1dfd74[^\s'"`]*/g, replace: '/images/optimized/hero_defense_tech.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1561233835-f937539b95b9[^\s'"`]*/g, replace: '/images/optimized/bfsi_banking.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1580106815433-a5b1d1d53d85[^\s'"`]*/g, replace: '/images/optimized/cloud_autonomous.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1601785491008-d1153dfadd57[^\s'"`]*/g, replace: '/images/optimized/energy_grid.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1708651949057-34781b3cbdcd[^\s'"`]*/g, replace: '/images/optimized/healthcare_interop.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1586528116311-ad8dd3c8310d[^\s'"`]*/g, replace: '/images/optimized/logistics_supply.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1559526324-4b87b5e36e44[^\s'"`]*/g, replace: '/images/optimized/bfsi_vertical.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1618005182384-a83a8bd57fbe[^\s'"`]*/g, replace: '/images/optimized/ai_solutions.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1441986300917-64674bd600d8[^\s'"`]*/g, replace: '/images/optimized/retail_commerce.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1576091160399-112ba8d25d1d[^\s'"`]*/g, replace: '/images/optimized/healthcare_lifesciences.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1544197150-b99a580bb7a8[^\s'"`]*/g, replace: '/images/optimized/cloud_telecom.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1563986768609-322da13575f3[^\s'"`]*/g, replace: '/images/optimized/cyber_defense.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1451187580459-43490279c0fa[^\s'"`]*/g, replace: '/images/optimized/cloud_modernization.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1522071820081-009f0129c71c[^\s'"`]*/g, replace: '/images/optimized/digital_transformation.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71[^\s'"`]*/g, replace: '/images/optimized/data_analytics.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1460925895917-afdab827c52f[^\s'"`]*/g, replace: '/images/optimized/finops_economics.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1550751827-4bd374c3f58b[^\s'"`]*/g, replace: '/images/optimized/secops_sovereign.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1507003211169-0a1dd7228f2d[^\s'"`]*/g, replace: '/images/optimized/avatar_1.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1573496359142-b8d87734a5a2[^\s'"`]*/g, replace: '/images/optimized/avatar_2.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1534528741775-53994a69daeb[^\s'"`]*/g, replace: '/images/optimized/avatar_3.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1519085360753-af0119f7cbe7[^\s'"`]*/g, replace: '/images/optimized/avatar_4.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1580489944761-15a19d654956[^\s'"`]*/g, replace: '/images/optimized/avatar_5.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1500648767791-00dcc994a43e[^\s'"`]*/g, replace: '/images/optimized/avatar_6.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1539571696357-5a69c17a67c6[^\s'"`]*/g, replace: '/images/optimized/avatar_7.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1517841905240-472988babdf9[^\s'"`]*/g, replace: '/images/optimized/avatar_8.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1524504388940-b1c1722653e1[^\s'"`]*/g, replace: '/images/optimized/avatar_9.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1472099645785-5658abf4ff4e[^\s'"`]*/g, replace: '/images/optimized/avatar_1.webp' },
  { match: /https:\/\/images\.unsplash\.com\/photo-1618722983535-6784e0b53ea9[^\s'"`]*/g, replace: '/images/optimized/cyber_defense.webp' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.name.endsWith('.js') || file.name.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const { match, replace } of REPLACEMENTS) {
        if (match.test(content)) {
          content = content.replace(match, replace);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated images in: ${fullPath}`);
      }
    }
  }
}

['app', 'lib', 'components'].forEach((folder) => {
  const targetDir = path.join(process.cwd(), folder);
  if (fs.existsSync(targetDir)) {
    processDirectory(targetDir);
  }
});

console.log('All codebase Unsplash URLs replaced with local compressed /images/optimized/... WebP paths!');
