import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { Google } from 'arctic';
import { Lucia } from 'lucia';

import { db } from './db';
import { sessions, users, UserStatus } from './db/schema';
import { env } from './env.mjs';

// Assuming sessions and users are correctly defined in ./db/schema
const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      email: attributes.email,
      emailVerified: attributes.emailVerified,
      name: attributes.name,
      image: attributes.image,
      status: attributes.status,
      currentTeamId: attributes.currentTeamId,
      googleId: attributes.googleId,
    };
  },
});

export const google = new Google(
  env.GOOGLE_CLIENT_ID,
  env.GOOGLE_CLIENT_SECRET,
  env.GOOGLE_REDIRECT_URI
);

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  email: string;
  emailVerified: boolean;
  name: string;
  image: string;
  status: typeof UserStatus;
  currentTeamId: string;
  googleId: string;
}
