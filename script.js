const level = document.querySelectorAll('.item_level');
const start = document.getElementById('start');
const simple = document.querySelector('.simple_game');
const middle = document.querySelector('.middle_game');
const hight = document.querySelector('.hight_game');
const bugCard = document.createElement('img');
const menu = document.getElementById('wrap')
const container = document.getElementById ('container')
bugCard.src = 'img/bug.png';


// выбор уровня, добавление ромба
level.forEach(function(element) {
    element.addEventListener("click", function(){
      level.forEach(function(element){
            element.classList.remove('item_level_active')
                  })
        element.classList.add('item_level_active');
      });


//Старт игры.
function startGame() {
	menu.classList.add('hidden');
  start.addEventListener('click', startGame());
  //Переход к карточному столу и создание карт выбранного уровня
	switch (level) {
    case 'simple':
          numberCards = 3;
         break;

        case 'middle':
          numberCards = 6;

        break;

         case 'hight':
          numberCards = 9;

        break;
	};
  createCard = () => {
     let newCards = document.createElement('div');
     newCards.classList = 'card_back';
     container.append(newCards);
     switch (numberCards) {
       case 9:
        container.classList.toggle("hight_game");
        break;
      }
  }


// Рандомная Замена карты с gameOver на bugCard
	const random = Math.floor(Math.random());
};
});
