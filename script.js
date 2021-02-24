const level = document.querySelectorAll('.item_level');
const start = document.getElementById('start');
const simple = document.querySelector('.simple_game');
const middle = document.querySelector('.middle_game');
const hight = document.querySelector('.hight_game');



// выбор уровня, добавление ромба
level.forEach(function(element) {
    element.classList.remove('item_level_active');
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
	let level;
	let cardTable;
	const arrCards = [];

	levels.forEach(elem => {
		if (elem.style.listStyle !== 'none') {
			level = elem;
		};
	});

start.addEventListener('click', startGame);

  //Переход к карточному столу и создание массива карт выбранного уровня
	switch (level.textContent) {
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
	function createArrCards (min, max) {
		for (let i=min; i<max; i++) {
			arrCards.push(cards[i]);
		};
  };
