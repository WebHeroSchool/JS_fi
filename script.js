const level = document.querySelectorAll('.item_level');
const start = document.getElementById('start');
const bugCard = document.createElement('img');
const menu = document.getElementById('wrap')
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


start.addEventListener('click', function(){
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
     menu.append(newCards);
     switch (numberCards) {
      case 3:
       menu.classList.toggle("simple_game");
       break;

       case 6:
       menu.classList.toggle("middle_game");
       break;

       case 9:
        menu.classList.toggle("hight_game");
        break;
      }
      function random() {
          return Math.round(Math.random());
        }
      };
      for (let i = 0; i < numberCards; i++ ) {
       createCard()
     }
    });
