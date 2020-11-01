import express from 'express';
import path from 'path';

import routerMethod from './routes/index.mjs';

const PORT = 3000;
const app = express();

app.use(express.static(path.join(path.resolve(), 'public')));
app.use('/', routerMethod);

app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
