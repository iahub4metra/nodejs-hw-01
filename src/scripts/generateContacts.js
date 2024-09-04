import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
const generateContacts = async (number) => {
    let contacts = [];

    try {
        const data = await readContacts();
        
        if (data) {
            contacts = JSON.parse(data);
        }

    } catch (error) {
        console.error('Error reading or parsing db.json:', error);
    }

    for (let i = 0; i < number; ++i) {
        const newContact = createFakeContact();
        contacts.push(newContact);
    }

    try {
        await writeContacts(JSON.stringify(contacts, null, 2))
    } catch (error) {
        console.error('Error writing to db.json:', error);
    }


};

generateContacts(5);
