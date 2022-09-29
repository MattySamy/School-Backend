import Lecture from '../../helpers/db/lecture.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function getLectureById(req, res) {
    try {
        const id = req.params.id;
        const lec = Lecture.find((l) => l.id == id);
        if (!lec) {
            return badRequestResponse(res, 'Lecture not found');
        }
        return okResponse(res, 'Lecture found succesfully', lec);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}