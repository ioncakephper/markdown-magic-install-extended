const fs = require('fs');
const path = require('path');

function installExtended({ options = {} } = {}) {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'),
  );

  const defaults = {
    heading: false,
    packageName: pkg.name,
    npm: true,
    yarn: true,
    pnpm: false,
    bun: false,
    global: false,
    dev: false,
  };

  const { heading, packageName, npm, yarn, pnpm, bun, global, dev } = {
    ...defaults,
    ...options,
  };

  let out = '';
  if (heading) {
    out += `# ${heading === true ? 'Installation' : heading}\n\n`;
  }
  if (npm) {
    out += '```bash\n';
    out += `npm install ${global ? '-g ' : ''}${packageName}${dev ? ' --save-dev' : ''}\n`;
    out += '```\n\n';
  }
  if (yarn) {
    out += '```bash\n';
    out += `yarn add ${global ? '-g ' : ''}${packageName}${dev ? ' --dev' : ''}\n`;
    out += '```\n\n';
  }
  if (pnpm) {
    out += '```bash\n';
    out += `pnpm add ${global ? '-g ' : ''}${packageName}${dev ? ' -D' : ''}\n`;
    out += '```\n\n';
  }
  if (bun) {
    out += '```bash\n';
    out += `bun install ${global ? '-g ' : ''}${packageName}${dev ? ' -d' : ''}\n`;
    out += '```\n\n';
  }

  return out.trim();
}

module.exports = installExtended;
