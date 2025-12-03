const cardsData = [
  {
    imgSrc: "../images/p1.jpg",
    text: "Расписной овсянковый кардинал",
  },
  {
    imgSrc: "../images/p2.jpg",
    text: "Удод",
  },
  {
    imgSrc: "../images/p3.jpg",
    text: "Двурогий калао",
  },
  {
    imgSrc: "../images/p4.jpg",
    text: "Кедровка",
  },
  {
    imgSrc: "../images/p5.jpg",
    text: "Золотистая щурка",
  },
  {
    imgSrc: "../images/p6.jpg",
    text: "Утка-мандаринка",
  },
  {
    imgSrc: "../images/p7.jpg",
    text: "Ходулочник",
  },
  {
    imgSrc: "../images/p8.jpg",
    text: "Дрофа",
  },
  {
    imgSrc: "../images/p9.jpg",
    text: "Свиристель",
  },
  {
    imgSrc: "../images/p10.jpg",
    text: "Восточный венценосный журавль",
  },
  {
    imgSrc: "../images/p11.jpg",
    text: "Чибис",
  },
  {
    imgSrc: "../images/p12.jpg",
    text: "Голубая Сойка",
  }
];

const container = document.getElementById("cards-container");

cardsData.forEach((item, index) => {
  const cardHtml = `
    <div class="card">
      <img src="${item.imgSrc}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${item.text}</p>
        <p class="card-text">Кол-во желудей: <input class="w-25" type="number" name="amount-${index + 1}" value="0"></p>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', cardHtml);
});
