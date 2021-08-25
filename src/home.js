export function renderHome() {
    const header = document.createElement('div');
    header.classList.add('activePage');
    header.classList.add('header');
    // header.classList.add('background');
    const headerH1 = document.createElement('h1');
    headerH1.textContent = `Tessie's Treats`;
    header.appendChild(headerH1);

    const headerPara = document.createElement('p');
    headerPara.textContent = `The best Filipino cuisine in the City!`;
    header.appendChild(headerPara);
    //hours
    const hoursDiv = document.createElement('div');
    renderHours(hoursDiv);
    header.appendChild(hoursDiv);

    return content.appendChild(header);
}

function renderHours(hoursDiv) {
    hoursDiv.classList.add('hoursWrap');

    const hoursHeader = document.createElement('h2');
    const hoursInfo = document.createElement('p');
    hoursHeader.textContent = 'hours';
    hoursInfo.innerHTML = `Monday-Friday: <span>9AM-9PM</span>
                             Saturday: <span>9AM-8PM</span>
                             Sunday: <span>9AM-6PM</span>`;

    hoursDiv.appendChild(hoursHeader);
    hoursDiv.appendChild(hoursInfo);
}