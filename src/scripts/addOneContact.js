import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    let contacts = []
    try {
        const data = await readContacts();
        
        if (data) {
            contacts = JSON.parse(data);
        }

    } catch (error) {
        console.error('Error reading or parsing db.json:', error);
    }
    const newContact = createFakeContact();
    contacts.push(newContact);
    try {
        await writeContacts(JSON.stringify(contacts, null, 2)) 
    } catch (error) {
        console.error('Error writing to db.json:', error);
    }
};

addOneContact();
