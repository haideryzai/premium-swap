import * as jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'subSwapSecret';
const expiresIn = '15d';

interface JwtPayload {
  id: number;
  username: string;
  user_type: string;
}

export function generateJwtToken(payload: JwtPayload): string {
  return jwt.sign(payload, secretKey, { expiresIn });
}
