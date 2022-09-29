import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function register(req, res) {
    try {
        const { name, email, password, phone, role } = req.body;
        if (Users.some((user) => user.email === email)) {
            return badRequestResponse(res, 'User already registered');
        }
        if (Users.some((user) => user.phone === phone)) {
            return badRequestResponse(res, 'Phone already registered');
        }
        if (Users.some((user) => user.name === name)) {
            return badRequestResponse(res, 'Name already registered');
        }
        if (role !== 'student' && role !== 'teacher') {
            return badRequestResponse(res, 'Role must be student or teacher');
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = {
            id: Users.length + 1,
            name,
            email,
            password: encryptedPassword,
            phone,
            role,
        };
        Users.push(user);
        return okResponse(res, 'User registered successfully', user);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}