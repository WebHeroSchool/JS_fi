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

 createCard = () => {
    let newCards = document.createElement('div');
     newCards.classList = 'card_back';
     newCards.classList.add ('card');
     menu.classList.add ('hight_game');
     menu.append(newCards);
   }

    for (let i = 0; i < numberCards; i++ ) {
     createCard (numberCards);




    /*const card= document.querySelectorAll('.card');
      let arrCards = function(card) {
  return arrCards.push(card);
};

      /*let click =0 ;
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
}*/

// рандомное расположение  и клики по картам.
function random() {
    return Math.round(Math.random());
  }
           let numberClick = 0;

  let arrCards = [document.querySelectorAll('card')].forEach(item => {
                item.addEventListener('click', function(){
                  ++numberClick;
                  if (numberClick %2 !== 0) {
                  random () ===0 ? item.classList.add('card_front') : item.classList.add('card_bug')
                  item.classList.remove('card_back');
                } else {
                    /* container.classList.toggle('hidden');
             		     menu.classList.toggle('hight_game');
                     let cards = document.querySelectorAll('.card');
             			cards.forEach(el => el.remove());*/
                    window.location.reload();
                }
              });

})


/*for (let i = 0; i < numberCards; i++ ) {
   createCard();
}*/
};
});
