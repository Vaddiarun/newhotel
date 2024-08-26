import express from 'express'
import {getAllData} from '../controllers/dashboard.controller.js';
import { verifyToken } from '../utils/verifyAdmin.js';

const router = express.Router()

router.post("/getAllData",verifyToken, getAllData);

export default router;