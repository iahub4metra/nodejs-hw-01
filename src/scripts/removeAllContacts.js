import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    let contacts = []
    try {
        const data = await readContacts();
        
        if (data) {
            contacts = JSON.parse(data);
        }

    } catch (error) {
        console.error('Error reading or parsing db.json:', error);
    }
    contacts = []
    try {
        await writeContacts(JSON.stringify(contacts, null, 2));
    } catch (error) {
        console.error('Error writing to db.json:', error);
    }
};

removeAllContacts();
