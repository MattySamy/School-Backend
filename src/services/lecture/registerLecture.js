import Lecture from '../../helpers/db/lecture.db.js';
import User from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function registerLecture(req, res, next) {
    try {
        const { lectureID, id } = req.body;
        const student = User.find((u) => u.id == id);
        const studentIndex = User.findIndex((u) => u.id == id);
        const lecIndex = Lecture.find((l) => l.name == lectureID);
        if (!lecIndex) {
            return badRequestResponse(res, "lecture does not exist");
        }
        if (!student) {
            return badRequestResponse(res, "user does not exist");
        }
        if (student.role != "student") {
            return badRequestResponse(res, "User should be student");
        }
        if (!User[studentIndex].lectures) {
            User[studentIndex] = {...student, lectures: [{ lecture: lectureID }] };
            return okResponse(
                res,
                "registerd lecture successfully",
                User[studentIndex]
            );
        }
        if (User[studentIndex].lectures.some((lect) => lect.lecture == lectureID)) {
            return badRequestResponse(
                res,
                "student has already registerd this lecture"
            );
        }
        User[studentIndex].lectures.push({ lecture: lectureID });
        return okResponse(res, "registerd lecture successfully", User[studentIndex]);
    } catch (err) {
        next(err);
    }
}