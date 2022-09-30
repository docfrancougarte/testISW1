const {createLogger, format, transports} = require('winston');

const timezoned = () => {
    return new Date().toLocaleString('se-SE', {
        timeZone: 'America/Costa_Rica'
    });
}

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp({format: timezoned}),
        format.printf(info => `[${info.timestamp}] ${info.level.toUpperCase()} ${info.message}`)
    ),
    level: 'debug',
    transports: [
        new transports.File({
            maxsize: 52428800,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-cs.log`
        }),
        new transports.Console({})
    ]
});

