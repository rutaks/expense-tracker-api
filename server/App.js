import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ErrorHandler from './utils/ErrorHandler';
import InternalError from './errors/InternalError';
import api from './routes/Index';

const app = express();
const port = process.env.PORT || 7000;

/** Middleware Config */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/** Routes */
/**
 * Route serving API Routes
 * @name /api/v1
 * @function
 * @param {string} path - Express path
 */
app.use('/api/v1', api);

app.use((err, req, res, next) => {
  ErrorHandler.handleError(err, res);
  next();
});

const runServer = () => {
  try {
    app.listen(port, () =>
      console.log(`Expense Tracker Running on port ${port}`)
    );
  } catch (error) {
    throw new InternalError('Could Not Connect To Backend');
  }
};

runServer();
