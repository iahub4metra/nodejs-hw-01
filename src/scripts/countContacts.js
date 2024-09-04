import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    let contacts = []
    try {
        const data = await readContacts();
        
        if (data) {
            contacts = JSON.parse(data);
        }

    } catch (error) {
        console.error('Error reading or parsing db.json:', error);
    }
    return contacts.length
};

console.log(await countContacts());
