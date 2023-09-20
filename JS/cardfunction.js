

"--função renderizar cards--"

function generateCarouselCards(data) {
    const carouselInner = document.querySelector('.carousel-inner');

    data.forEach(function (card, index) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardImage = document.createElement('img');
        cardImage.src = card.imageUrl;
        cardImage.alt = 'Card Image';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = card.title;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = card.text;

        const cardButton = document.createElement('a');
        cardButton.classList.add('btn', 'btn-primary');
        cardButton.href = '#';
        cardButton.textContent = card.buttonLabel;
        if (card.showModal) {
            cardButton.setAttribute('data-bs-toggle', 'modal');
            cardButton.setAttribute('data-bs-target', `#exampleModal${index}`);
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

"--modal--"

function generateModal(data) {
    data.forEach(function (card, index) {
        // Cria o modal Fade
        const modalFade = document.createElement("div");
        modalFade.classList.add("modal");
        modalFade.classList.add("fade");
        modalFade.id = `exampleModal${index}`;
        modalFade.setAttribute("tabindex", "-1");
        modalFade.setAttribute("aria-labelledby", `exampleModalLabel${index}`);
        modalFade.setAttribute("aria-hidden", "true");

        // Cria o modal Dialog
        const modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog");
        modalFade.appendChild(modalDialog);

        // Cria o modal content
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalDialog.appendChild(modalContent);

        // Cria o modal header
        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");
        modalContent.appendChild(modalHeader);

        // Coloca o conteúdo no modal header
        const modalTitle = document.createElement("h1");
        modalTitle.classList.add('modal-title');
        modalTitle.classList.add('fs-5');
        modalTitle.id = `exampleModalLabel${index}`;
        modalTitle.textContent = card.title;
        modalHeader.appendChild(modalTitle);

        const button = document.createElement("button");
        button.classList.add("btn-close");
        button.type = "button";
        button.setAttribute("data-bs-dismiss", "modal");
        button.setAttribute("aria-label", "Close");
        modalHeader.appendChild(button);

        // Cria o modal body
        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        modalContent.appendChild(modalBody);

        // Cria a imagem no modal body
        const img = document.createElement("img");
        img.src = card.imageUrl;
        img.alt = "Imagem do modal";
        modalBody.appendChild(img);

        // Cria o texto no modal body
        const text = document.createElement("p");
        text.textContent = card.text;
        modalBody.appendChild(text);

        // Cria o modal footer
        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        modalContent.appendChild(modalFooter);

        // Cria botão de ação no modal footer
        const actionButton = document.createElement("button");
        actionButton.classList.add("btn");
        actionButton.classList.add("btn-dark");
        actionButton.textContent = card.buttonLabel;
        modalFooter.appendChild(actionButton);

        // Anexa o modal ao corpo do documento
        document.body.appendChild(modalFade);
    });
}

"--cards--"


const cardData = [
    {
        imageUrl: 'https://picsum.photos/800/600?random=1',
        title: 'Card title 1',
        text: 'Some quick example text for card 1',
        buttonLabel: 'Go somewhere 1',
        showModal: true
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=2',
        title: 'Card title 2',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 2',
        showModal: true
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=3',
        title: 'Card title 3',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 3',
        showModal: true
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=4',
        title: 'Card title 4',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 4',
        showModal: true
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=5',
        title: 'Card title 5',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 5',
        showModal: true
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=6',
        title: 'Card title 6',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 6',
        showModal: true
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=7',
        title: 'Card title 7',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 7',
        showModal: true
    },
    {
        imageUrl: 'https://picsum.photos/800/600?random=8',
        title: 'Card title 8',
        text: 'Some quick example text for card 2',
        buttonLabel: 'Go somewhere 8',
        showModal: true
    },
];


generateCarouselCards(cardData);
generateModal(cardData);