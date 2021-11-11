import { UserDocument } from '../models/user';
import jwt from 'jsonwebtoken';

class JWTService {
  static JWT_KEY = process.env.JWT_KEY;

  static generate(user: UserDocument) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      JWTService.JWT_KEY!
    );
  }

  static verify(userJwt: string) {
    return jwt.verify(userJwt, JWTService.JWT_KEY!);
  }
}

export { JWTService };
