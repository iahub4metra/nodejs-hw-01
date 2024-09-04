import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    let contacts = []
    try {
        const data = await readContacts();
        
        if (data) {
            contacts = JSON.parse(data);
        }

    } catch (error) {
        console.error('Error reading or parsing db.json:', error);
    }
    return contacts
};

console.log(await getAllContacts());
