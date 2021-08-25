
function renderMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');
    menuDiv.classList.add('activePage');

    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'menu';
    menuDiv.appendChild(menuH1);
    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add('cardsDiv');
    //card 1:
    const menuOne = new Menu();
    menuOne.createCard('chicken roll', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore`, '$5 each', 'images/chickenroll.jpg');
    cardsDiv.appendChild(menuOne.card); 
    //card 2: 
    const menuTwo = new Menu();
    menuTwo.createCard('longganisa', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore`, '$5 per pack', 'images/item2.jpg');
    cardsDiv.appendChild(menuTwo.card);
    //card 3: 
    const menuThree = new Menu();
    menuThree.createCard('Bulacan Beef Steak', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore`, '$10 with white rice, $5 without', 'images/item3.jpg');
    cardsDiv.appendChild(menuThree.card);
    //card 4: 
    const menuFour = new Menu();
    menuFour.createCard('lumpia shanghai', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore`, '$10 per pound', 'images/item4.jpg');
    cardsDiv.appendChild(menuFour.card);

    menuDiv.appendChild(cardsDiv);
    return content.appendChild(menuDiv);
}

class Menu {
    constructor(card, title, about, price, image) {
        this.card = card;
        this.title = title; 
        this.about = about; 
        this.price = price; 
        this.image = image; 
        
    }

    createCard(titleContent, aboutContent, priceContent, imageSource) { 
        this.card = document.createElement('div');
        this.card.classList.add('card');

        this.title = document.createElement('h2');
        this.about = document.createElement('p');
        this.price = document.createElement('p');
        this.image = document.createElement('img');

        this.title.textContent = titleContent;
        this.about.textContent = aboutContent;
        this.price.textContent = priceContent;
        this.price.classList.add('priceText');
        this.image.src = imageSource;

        this.card.appendChild(this.title);
        this.card.appendChild(this.image);
        this.card.appendChild(this.about);
        this.card.appendChild(this.price);
        
    }

}

export {renderMenu};