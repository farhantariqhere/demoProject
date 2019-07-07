const dateFormat = require('dateformat');
const winston = require('winston');
const config = require('config');
const path = require('path');

const { inspect } = require('util');

const getFormattedMsg = (...args) => {

  const argss = Array.prototype.slice.call(args);

  const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
  const stackReg2 = /at\s+()(.*):(\d*):(\d*)/i;
  const data = {};
  const stacklist = (new Error()).stack.split('\n').slice(3);
  const s = stacklist[0];
  const sp = stackReg.exec(s) || stackReg2.exec(s);
  if (sp && sp.length === 5) {

    data.method = sp[1];
    data.path = sp[2];
    data.line = sp[3];
    data.pos = sp[4];
    data.file = path.basename(data.path);

    data.path = data.path.replace(`${config.projectRoot}/`, '');

  }

  const strArgs = [];

  for (let index = 0; index < argss.length; index += 1) {

    let arg = argss[index];

    if (typeof arg !== 'string') {

      arg = inspect(arg);

    }

    strArgs.push(arg);

  }

  return [dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss.l'), `${data.path}:${data.line}`, ...strArgs];

};

const fullColorizer = options => winston.config.colorize(options.level, options.message);

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    success: 2,
    info: 3
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    success: 'green',
    info: 'cyan'
  }
};

const defaultLevel = 'info';

const transport = new winston.transports.Console({
  handleExceptions: true,
  humanReadableUnhandledException: true,
  json: false,
  colorize: true,
  prettyPrint: true,
  showLevel: false,
  level: defaultLevel,
  formatter: fullColorizer
});

const logger = new winston.Logger({
  levels: myCustomLevels.levels,
  level: defaultLevel,
  exitOnError: false,
  transports: [transport]
});

winston.addColors(myCustomLevels.colors);

const getLogger = type => (...args) => {

  logger[type](...getFormattedMsg(...args));

};
// eslint-disable-next-line no-console
console.log = getLogger('info');
// eslint-disable-next-line no-console
console.info = getLogger('info');
// eslint-disable-next-line no-console
console.error = getLogger('error');
// eslint-disable-next-line no-console
console.warn = getLogger('warn');
// eslint-disable-next-line no-console
console.error = getLogger('error');

module.exports = {
  error: getLogger('error'),
  warn: getLogger('warn'),
  success: getLogger('success'),
  info: getLogger('info')
};
