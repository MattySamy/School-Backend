import { Router } from 'express';
import * as LectureService from '../services/lecture/index.js';
const router = Router();
router.get('/', LectureService.getLecture);
router.get('/:id', LectureService.getLectureById);
router.post('/', LectureService.assignLecture);
router.post('/', LectureService.registerLecture);
export default router;