const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix case sensitivity for the 'Art' folder (Linux is case-sensitive)
      content = content.replace(/\/art\//g, '/Art/');
      
      // Prepend /Portfolio_new to all absolute static asset paths
      content = content.replace(/('|")\/([^'"]+\.(png|jpeg|jpg|svg|pdf))('|")/g, '$1/Portfolio_new/$2$4');
      
      // Fix CSS url() paths like url('/stars.png')
      content = content.replace(/url\(\'\/([^']+)\'\)/g, "url('/Portfolio_new/$1')");
      content = content.replace(/url\(\"\/([^"]+)\"\)/g, 'url("/Portfolio_new/$1")');

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log("Paths updated successfully!");
