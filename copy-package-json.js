const fs = require('fs-extra');
const { join } = require('path');

(async() => {
  await fs.copy(join(process.cwd(), 'node_modules/@agm/core/package.json'),
                join(process.cwd(), 'functions/@agm/core/package.json'));
})();