
const startWhistle = require('whistle');
const { getPort } = require('../util');

let result;

module.exports = () => {
  if (!result) {
    result = new Promise((resolve) => {
      getPort((port) => {
        const proxy = startWhistle({
          port,
          encrypted: true,
          storage: 'nohost_network_mode',
          mode: 'network',
        }, () => resolve(port, proxy));
      });
    });
  }
  return result;
};
