const level = document.querySelectorAll('.item_level');
const start = document.getElementById('start');
const simple = document.querySelector('.simple_game');
const middle = document.querySelector('.middle_game');
const hight = document.querySelector('.hight_game');
const cards = document.querySelectorAll('.card');
const bugCard = document.createElement('img');
bugCard.src = 'img/bug.png';


// выбор уровня, добавление ромба
level.forEach(function(element) {
    element.addEventListener("click", function(){
      level.forEach(function(element){
            element.classList.remove('.item_level_active')
                  })
        element.classList.add('item_level_active');
      });

//Старт игры.
function startGame() {
	const menu = document.getElementById('wrap');
	menu.classList.add('hidden');
  let choice;
	let cardTable;
	const arrCards = [];

	choices.forEach(elem => {
		if (elem.style.listStyle !== 'none') {
			choice = elem;
		};
	});

start.addEventListener('click', startGame);

  //Переход к карточному столу и создание массива карт выбранного уровня
	switch (choice.textContent) {
		case 'simple':
			cardTable = simple;
			createArrCards(0, 3);
			break;
		case 'middle':
			cardTable = middle;
			createArrCards(3, 9);
			break;
		case 'hight':
			cardTable = hight;
			createArrCards(9, 19);
	};
	cardTable.classList.remove('hidden');
	function createArrCards (max) {
		for (let i=0 ; i<max; i++) {
			arrCards.push(cards[i]);
		};
  }

// Рандомная Замена карты с gameOver на bugCard
	const random = Math.floor(Math.random() * arrCards.length);
	const backCard = arrCards[random].children[1];
  backСard.src = 'img/front.png';
	backCard.children[0].style.display = 'none';
	backCard.append(bugCard);
	bugCard.classList.add('card');
}
});
