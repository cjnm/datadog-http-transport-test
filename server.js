import express from 'express';
import { logger } from './logger.js'

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const startTime = new Date().toString();

   await logger.error({message: 'Hello World from Docker Node App! This is not an error!', startTime, host: '127.0.0.2'});

    res.send('Hello World From Docker');
});

app.listen(PORT, HOST, () => {
    logger.info({message: `Running on http://${HOST}:${PORT}`});
    console.log(`Running on http://${HOST}:${PORT}`);
});
