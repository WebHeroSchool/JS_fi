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
  createCard = (numberCards) => {
    let newCards = document.createElement('div');
     newCards.classList = 'card_back';
     menu.append(newCards);
     menu.classList.add ('hight_game');
  // рандомное расположение  и клики по картам.
  function random() {
      return Math.round(Math.random());
    }

      let click =0 ;
      if (click %2 !== 0){
      newCards.addEventListener ('click', function flip (event) {
          random () ===0 ? newCards.classList.add('card_front') : newCards.classList.add('card_bug')
          newCards.classList.remove('card_back');
        })
      } else {
      let block = document.createElement('div');
   		  block.classList = 'block';
   		  document.body.append(block);
        block.addEventListener ('click',function end () {
          window.location.reload();
})
}
          /*  let numberClick = 0;
                newCards.addEventListener ('click',   function showHide() {
                  ++numberClick;
                  if (numberClick % 2 !== 0) {
                  random () ===0 ? newCards.classList.add('card_front') : newCards.classList.add('card_bug')
                  newCards.classList.remove('card_back');
                } else {
                    newCards.classList.add('card_front')
                     container.classList.toggle('hidden');
             		     menu.classList.toggle('hight_game');
                     let cards = document.querySelectorAll('.card_front');
             			cards.forEach(el => el.remove());
                }
              });*/
}
for (let i = 0; i < numberCards; i++ ) {
   createCard(numberCards);
 }
});
