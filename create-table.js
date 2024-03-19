
import { sql } from './db.js'

sql`
    CREATE TABLE Tabela (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Create Table OK');
})