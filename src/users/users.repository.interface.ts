import { UserModer } from '@prisma/client';
import { User } from './user.entity';

export interface IUsersRepository {
	create: (user: User) => Promise<UserModer>;
	find: (email: string) => Promise<UserModer | null>;
}
