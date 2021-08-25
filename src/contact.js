function renderContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contactDiv');
    const contactH1 = document.createElement('h1');
    contactH1.textContent = 'Contact';
    contactDiv.classList.add('activePage');
    contactDiv.appendChild(contactH1);

    const contactWrap = document.createElement('div');
    createContact(contactWrap);
    contactDiv.appendChild(contactWrap);

    return content.appendChild(contactDiv);
}

function createContact(contactWrap) {
    contactWrap.classList.add('contactWrap');
    const contactNumber = document.createElement('h3');
    const contactLocation = document.createElement('h3');
    const contactMap = document.createElement('img');
    
    contactNumber.textContent = '📲 905 111 2222';
    contactLocation.textContent = '22 Southern Singer street, Toronto, ON';
    contactMap.src = 'images/map.jpg';
    
    contactWrap.appendChild(contactNumber);
    contactWrap.appendChild(contactLocation);
    contactWrap.appendChild(contactMap);
}

export {renderContact};