import express from 'express';
import { postsRoutes } from '@application/routes';
import cors from 'cors';

const app = express();

app.use(express.json());

const corsWhitelist = [
    'http://localhost:4200'
];

app.use(cors(corsWhitelist));

app.use(postsRoutes);

export { app };