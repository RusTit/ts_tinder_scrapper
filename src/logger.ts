import log4js, { Logger } from 'log4js';
import config from './config';

log4js.configure(config.log4js);

function LoggerFactory(category: string): Logger {
  return log4js.getLogger(category);
}

export default LoggerFactory;
