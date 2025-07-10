import express from 'express';
import tareasRutas from './routers/app_routes.js';
const app = express();

app.use(express.json());
app.use("/",tareasRutas);

export default app;

