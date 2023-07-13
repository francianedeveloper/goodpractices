import './config/aliases';
import http from 'http';
import { app } from '@config/express';

app.set('port', process.env.PORT || 3000);

const createAndStartServer = () => {
    const server = http.createServer(app).listen(app.get('port'), function () {
        console.info('###########################################################');
        console.info(`#            Server is listening on port: ${app.get('port')}            #`);
        console.info('###########################################################');
    });

    const oneMinute: number = 60 * 1000;

    server.keepAliveTimeout = 5 * oneMinute;
    server.headersTimeout = 5 * oneMinute;
};

createAndStartServer();
