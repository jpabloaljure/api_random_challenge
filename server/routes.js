import examplesRouter from './api/controllers/examples/router'
import randomNamesRouter from './api/controllers/randomNames/router'
export default function routes(app) {
  app.use('/api/v1/examples',examplesRouter);
  app.use('/api/v1/randomNames',randomNamesRouter);
};