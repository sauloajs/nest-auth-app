import * as bcrypt from 'bcrypt';

interface HashProps {
  str: string;
  rounds?: number;
  hash?: string;
}

type GenerateHashProps = Omit<HashProps, 'hash'>;
type CheckHashProps = Omit<HashProps, 'rounds'>;

export const generateHashString = async ({
  str,
  rounds = 8,
}: GenerateHashProps) => {
  return await bcrypt.hash(str, rounds);
};

export const checkHash = async ({ str, hash }: CheckHashProps) => {
  return await bcrypt.compare(str, hash);
};
