import {renderHome} from './home';
import {renderMenu} from './menu';
import {renderContact} from './contact';

export function loadPage() {
    content.classList.add('background');
    //render nav 
    renderNav();
    //render home page 
    let activeTab; 
    renderHome();
    //active tab: 
    activeTab = document.querySelector('.active');
    //event
    document.querySelectorAll('nav div').forEach((tab) => {
        tab.addEventListener('click', (e) => {
            activeTab.classList.remove('active');
            tab.classList.add('active');
            activeTab = tab;
            //remove active tab first and then render new tab
            content.removeChild(document.querySelector('.activePage'));
            if(activeTab.textContent === 'home') {
                renderHome();
            }
            if (activeTab.textContent === 'menu') {
                renderMenu();
            }
            if(activeTab.textContent === 'contact') {
                renderContact();
            }
        });
    });
}

function renderNav() {
    
    const nav = document.createElement('nav');
    content.appendChild(nav);
    //Home Tab:
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('active');
    const homeH1 = document.createElement('h1');
    homeH1.textContent = 'home';
    homeDiv.appendChild(homeH1);
    //Menu Tab: 
    const menuDiv = document.createElement('div');
    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'menu';
    menuDiv.appendChild(menuH1);
    //Contact Tab: 
    const contactDiv = document.createElement('div');
    const contactH1 = document.createElement('h1');
    contactH1.textContent = 'contact';
    contactDiv.appendChild(contactH1);

    //appending tabs: 
    nav.appendChild(homeDiv);
    nav.appendChild(menuDiv);
    nav.appendChild(contactDiv);

}