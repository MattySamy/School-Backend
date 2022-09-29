import Lecture from '../../helpers/db/lecture.db.js';
import User from '../../helpers/db/users.db.js';
import RegLecture from '../../helpers/db/regLecture.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function registerLecture(req, res, next) {
    try {
        const { lectureId, studentId } = req.body;
        const student = User.find((s) => s.id == studentId);

        if (!lectureId || !studentId) {
            return badRequestResponse(res, 'Please fill all fields');
        }
        if (!student) {
            return badRequestResponse(res, 'Student not found');
        }
        if (student.role == 'teacher') {
            return badRequestResponse(res, 'Teacher cannot register for a lecture');
        }
        for (const lecture of lectureId) {
            const lectureFound = Lecture.find(
                (lectureFound) => lectureFound.id == lecture.lectureId
            );
            if (!lectureFound) {
                return badRequestResponse(res, 'Lecture not found');
            }
        }
        const lecture = {
            LectureRegisterId: RegLecture.length + 1,
            studentId,
            lectureId,
        }
        Lecture.push(lecture);
        return okResponse(res, 'Lecture registered successfully', lecture);
    } catch (err) {
        next(err);
    }
}