function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }

const saveContact = (db, contact) => {
    db.setItem(contact.id, JSON.stringify(contact))
    window.location.href = '/'
}

const loadContacts = (db, parentNode) => {
    let keys = Object.keys(db);
    for(key of keys) {
        let contact = JSON.parse(db.getItem(key));
        createContact(parentNode, contact, db);
    }
}

const createContact = (parentNode, contacto, db) => {
    let divContact = document.createElement('div');
    let nameContact = document.createElement('h3');
    let numberContact = document.createElement('p');
    let adressContact = document.createElement('p');
    let iconDelete = document.createElement('span');

    nameContact.innerHTML = contacto.name;
    numberContact.innerHTML = contacto.number;
    adressContact.innerHTML = contacto.address;
    iconDelete.innerHTML = 'delete_forever';

    divContact.classList.add('contact');
    iconDelete.classList.add('material-icons', 'icono');
    iconDelete.onclick = () => {
        deleteContact(db, contacto)
    }

    divContact.appendChild(nameContact);
    divContact.appendChild(numberContact);
    divContact.appendChild(adressContact);
    divContact.appendChild(iconDelete);
    parentNode.appendChild(divContact);
}

const deleteContact = (db, contact) => {
    db.removeItem(contact.id)
    window.location.href = '/'
}

function existsContact(db, contact){
    let keys = Object.keys(db);
    for(key of keys) {
        let existsContact = JSON.parse(db.getItem(key));
        if (existsContact.name.toUpperCase() === contact.name.toUpperCase()){
            return true;
        }
    }
    return false;
}