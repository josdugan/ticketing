import { UserDocument } from '../models/user';
import jwt from 'jsonwebtoken';

class JWTService {
  static generate(user: UserDocument) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );
  }

  static verify(userJwt: string) {
    return jwt.verify(userJwt, process.env.JWT_KEY!);
  }
}

export { JWTService };
