import Lecture from '../../helpers/db/lecture.db.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
export async function getLecture(req, res, next) {
    try {
        return okResponse(res, 'All Lectures fetched successfully', Lecture);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}