const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//!function that open modal by clicking card
const showModal = ()=>{
    modal.classList.add('show');
    overlay.classList.add('show');
}
// !close modal function
const closeModal = ()=>{
  modal.classList.remove('show');
  overlay.classList.remove('show');
}
// ! creating product modal
export const createModal =(card , data ) =>{
  card.forEach( card=> {
        // ! adding click to each btn
        card.addEventListener('click', ()=>{
            const cardId = card.id
            console.log(cardId);
             // !FIND ONE PRODUCT THAT WAS CHOSEN BY USER
            const { image, name, house,patronus,actor, gender } = data.find(el => el.id === cardId)
            modal.innerHTML = `
            <div class="modal__header">
            <img src=${image ? image :gender === 'male' ? '../img/anonym.png' : gender === 'female'? '../img/female.png' : gender}
             alt="${name}">
             <button class="close__modal"></button>
          </div>
          <div class="modal__body">
    
            <h4 class="modal__body-title">
              ${name}
            </h4>
    
            <p class="modal__body-subtitle"> 
             ${house }
            </p>
            <p class="modal__body-patr">
            ${patronus}
            </P>
            <p class="modal__body-actor">
            ${actor}
            </P>
          </div>
        </div>`;
         // !FIND ONE PRODUCT THAT WAS CHOSEN BY USER
      showModal()
      const closeModalBtn = document.querySelector('.close__modal',)
      closeModalBtn.addEventListener('click', closeModal,)
      overlay.addEventListener('click', closeModal)
        });
    });
}


      

// const cardCard = document.querySelectorAll('.card');
// const modals = document.querySelector('.modal');
// cardCard.forEach((el)=>{
//   el.addEventListener('click',(e)=>{
//     let path = e.currentTarget.getAttribute('.modal')
//   })
// })