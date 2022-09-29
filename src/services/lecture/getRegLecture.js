import RegLecture from '../../helpers/db/regLecture.db.js';
import Lecture from '../../helpers/db/lecture.db.js';
import User from '../../helpers/db/users.db.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function getRegLecture(req, res, next) {
    try {
        const regLecture = RegLecture.map((lecture) => {
            const student = User.find((user) => user.id === lecture.studentId);
            const lectures = lecture.lectureId.map((lecture) => {
                const lectureFound = Lecture.find((lectureFound) => lectureFound.id === lecture.lectureId);
                delete lectureFound.id;
                return {
                    ...lectureFound,
                };
            });
            return {
                LectureRegisterId: lecture.id,
                student,
                lectures,
            };
        });
        return okResponse(res, 'Lecture which is registered', regLecture);
    } catch (err) {
        next(err);
    }
}