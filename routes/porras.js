import express from 'express';

import { leerPorras } from '../controladores/porras.js';

const RouterPorras = express.Router();
RouterPorras.get('/', leerPorras);



export default RouterPorras;