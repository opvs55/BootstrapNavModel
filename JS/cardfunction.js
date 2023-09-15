

function generateCarouselCards(data) {
    var carouselInner = document.querySelector('.carousel-inner');

    data.forEach(function (card, index) {
        var carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        var cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        var cardImage = document.createElement('img');
        cardImage.src = card.imageUrl;
        cardImage.alt = 'Card Image';

        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        var cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = card.title;

        var cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = card.text;

        var cardButton = document.createElement('a');
        cardButton.classList.add('btn', 'btn-primary');
        cardButton.href = '#';
        cardButton.textContent = card.buttonLabel;
        if (card.showModal) {
            cardButton.setAttribute('data-bs-toggle', 'modal');
            cardButton.setAttribute('data-bs-target', '#exampleModal');
        }

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardButton);

        cardDiv.appendChild(cardImage);
        cardDiv.appendChild(cardBody);

        carouselItem.appendChild(cardDiv);
        carouselInner.appendChild(carouselItem);
    });
}

"--cards--"


const cardData = [
    {
        imageUrl: 'https://picsum.photos/800/600?random=1',
        title: 'Card title 1',
        text: 'Some quick example text for card 1',
        buttonLabel: 'Go somewhere 1',
        showModal: false
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=2',
        title: 'Card title 2',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 2',
        showModal: false
    },
    // ... adicione mais objetos para mais cards
];

generateCarouselCards(cardData);