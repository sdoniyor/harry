import { createModal } from "./modal.js";

export const createCards = (data, div) => {
  div.innerHTML = data
    .map(
      ({id, image, name, house,gender,actor}) =>
        `
        <article id="${id}" class="card"  class="item active" data-tab="tab-1">
        <div class="card__header">
           <img data-tab="tab-1" class="item"
             src="${image ? image :gender === 'male' ? '../img/anonym.png' : gender === 'female'? '../img/female.png' : gender} "
             alt="${name}"
           />
        </div>
           <h4 class="card__body-title, character">${name}</h4>
           
           <img class="character" src="${house === `Gryffindor` ? '../img/lev-transformed.png' 
           : house === `Slytherin` ? '../img/zmeya-transformed.png' 
           : house === `Hufflepuff`? '../img/enot-transformed.png'
           : house === 'Ravenclaw'? '../img/orel-transformed.png':house}"  alt=""/>
     </article>
	  `
    )
    .join("");
	const product = document.querySelectorAll('.card');
	createModal(product, data,);
    }

export const searchValue = document.querySelector('input')
export const search = (data,cardsParent) => {
  searchValue.addEventListener('input',() => {
      const text = searchValue.value;
      const searchData = data.filter(item=>item.name.toLowerCase().includes(text.toLowerCase()))
      createCards(searchData,cardsParent)
  })
}



 export const filterHouse = (data, tabsBtn, cardsParent)=> {
  tabsBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
      const house = btn.dataset.target;
   
      const test  = data.filter(item => item.house.toLowerCase().includes(house.toLowerCase()))
      // console.log(test);
     createCards(test, cardsParent)
    })
  })
}