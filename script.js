const level = document.querySelectorAll('.item_level');
const start = document.getElementById('start');
const menu = document.getElementById('wrap');
const  container = document.getElementById('container');
let numberCards = 3;

// выбор уровня, добавление ромба
level.forEach(function(element) {
    element.addEventListener("click", function(){
      level.forEach(function(element){
            element.classList.remove('item_level_active')
                  })
        element.classList.add('item_level_active');
      })
    });

// Страт игры, создание и вывод карт на экран
function chooseLevel(){
  container.classList.add('hidden');
  menu.classList.remove('hidden');
  let levelChoice = document.querySelector('.item_level_active').getAttribute('id');
  switch (levelChoice) {
    case 'simple':
          numberCards = 3;
         break;

        case 'middle':
          numberCards = 6;
        break;

         case 'hight':
          numberCards = 9;
        break;
  }
 createCard = () => {
    let newCards = document.createElement('div');
     newCards.classList = 'card_back';
      newCards.classList.add ('card');
     menu.classList.add ('hight_game');
     menu.append(newCards);
   }
   for (let i = 0; i < numberCards; i++ ) {
   createCard (numberCards);
   }

   function random() {
       return Math.round(Math.random());
     }

     let numberClick = 0;

     function end () {
     ++numberClick;
     if (numberClick %2 !== 0) {
     random () ===0 ? item.classList.add('card_front') : item.classList.add('card_bug')
     item.classList.remove('card_back');
     } else {
     window.location.reload();
     }
   }

   let cards = document.querySelectorAll('.card');
   cards.forEach(item => item.addEventListener('click', end));
 }

   start.addEventListener('click', chooseLevel);
