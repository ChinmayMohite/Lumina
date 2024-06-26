import type {Config} from 'drizzle-kit'
import * as dotenv from 'dotenv'

if (!process.env.DATABASE_URL) {
    console.log("Cannot Find Database URL")
}

export default {
    schema : './src/lib/supabase/schema.ts',
    out : './migrations',
    driver : 'pg',
    dbCredentials : {
        connectionString : process.env.DATABASE_URL || '',
    },
} satisfies Config