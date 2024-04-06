import * as bcrypt from 'bcrypt';
import crypto from 'crypto';

const HASH_SALT_OR_ROUNDS = 10;
const PASSWORD_LENGTH_POLICY = 8;

export const generatePassword = (): string => {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';

  return Array.from(
    crypto.randomFillSync(new Uint32Array(PASSWORD_LENGTH_POLICY)),
  )
    .map((x) => chars[x % chars.length])
    .join('');
};

export const hashPassword = async (
  password: string,
): Promise<string | null> => {
  if (password?.length) {
    return await bcrypt.hash(password, HASH_SALT_OR_ROUNDS);
  }

  return null;
};
