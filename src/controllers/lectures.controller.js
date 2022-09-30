import { Router } from 'express';
import * as LectureService from '../services/lecture/index.js';
const router = Router();
router.get('/', LectureService.getLecture);
router.get('/:id', LectureService.getLectureById);
router.post('/assign/', LectureService.assignLecture);
router.post('/register/', LectureService.registerLecture);
export default router;