import { createLogger, format, transports } from 'winston';

const dd_api_key = '';

const httpTransportOptions = {
    host: 'http-intake.logs.us5.datadoghq.com',
    path: `/api/v2/logs?dd-api-key=${dd_api_key}&ddsource=nodejs&service=docker/node`,
    port: 443,
    ssl: true
};


const httpTransport = new transports.Http(httpTransportOptions);

const logger = createLogger({
    level: 'error',
    exitOnError: false,
    transports: [
        httpTransport,
        new transports.Console()
        ],
});

httpTransport.on('warn', (err) => console.log('warning! ' + err));

export { logger, httpTransport };
