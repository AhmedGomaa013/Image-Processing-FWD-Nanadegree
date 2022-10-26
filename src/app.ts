import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(routes);
app.set('view engine', 'ejs');
app.set('views', './view');

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
