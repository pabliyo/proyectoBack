import jwt from 'jsonwebtoken';
import 'dotenv/config';

const payload = {
  username: 'admin',
  role: 'admin'
};

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log('TOKEN JWT:', token);