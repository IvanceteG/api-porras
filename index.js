console.log("Hola mundo");

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import RouterPorras from './routes/porras.js';
const app = express();
app.use(cors());

app.use('/api/porras', RouterPorras);

app.get('/', (req, res) => {
    res.send('Api de porras')
})








const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})