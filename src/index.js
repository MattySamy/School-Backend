import express from 'express';
import UsersRouter from './controllers/users.controller.js';
import AuthRouter from './controllers/auth.controller.js';
import LectureRouter from './controllers/lectures.controller.js';
import logger from './helpers/middlewares/logger.js';
import dotenv from 'dotenv';
import errorHandler from './helpers/middlewares/errorHandler.js';
import cors from 'cors';
dotenv.config();
const app = express();
// -- Middleware --
app.use(express.json());
app.use(logger);
app.use(cors({
    origin: 'http://127.0.0.1/5500',
    methods: ['GET', 'POST'],
}));
// -- Routes --
app.use('/user', UsersRouter);
app.use('/auth', AuthRouter);
app.use('/lecture', LectureRouter);

app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    console.log(`http://localhost:${PORT}`);
});

export default app;