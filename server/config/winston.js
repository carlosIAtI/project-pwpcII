import winston, { format } from 'winston';

// Se obtiene la ruta a la raiz de proyecto
import appRoot from 'app-root-path';

const { combine, timestamp, label, printf, colorize } = format;

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

winston.addColors(colors);

// Creando formato para la consola
const myConsoleFormat = combine(
  colorize({ all: true }),
  label({ label: '🎫' }),
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  printf(
    (info) =>
      `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
  )
);

// Creando formato para archivo
const myFileFormat = combine(
  // Sin color
  format.uncolorize(),
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  format.json()
);

// Crear el objeto de opciones (options object)
const options = {
  infoFile: {
    level: 'info',
    filename: `${appRoot}/server/logs/info.log`,
    handleExceptions: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: myFileFormat,
  },
  warnFile: {
    level: 'warn',
    filename: `${appRoot}/server/logs/warn.log`,
    handleExceptions: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: myFileFormat,
  },
  errorFile: {
    level: 'error',
    filename: `${appRoot}/server/logs/error.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: myFileFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: myConsoleFormat,
  },
};

// Creamos una instancia del logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.infoFile),
    new winston.transports.File(options.warnFile),
    new winston.transports.File(options.errorFile),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // No finaliza en excepciones no manejadas
});

// Morgan ---> consola
// Morgan ---> [winston] ---> [transportes]
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default logger;
