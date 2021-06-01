const nameContact = document.querySelector('.name');
const numberContact = document.querySelector('.number');
const adressContact = document.querySelector('.address');
const btnAddContact = document.querySelector('.btn-agregar-contacto');
const contactList = document.querySelector('.list-contact');
const db = window.localStorage;

btnAddContact.onclick = () => {
    let contact = {
        id: createUUID(),
        name: nameContact.value,
        number: numberContact.value,
        address: adressContact.value,
    }
    if (existsContact(db, contact)) {
        alert('A contact with the entered name already exists');
    } else {
        saveContact(db, contact);
    }
}

loadContacts(db, contactList);