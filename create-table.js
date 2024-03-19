import { sql } from './db.js'

/* sql`
    DROP TABLE tabela;
`.then(() => {
    console.log('Drop Table OK')
}) */

sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Create Table OK')
})