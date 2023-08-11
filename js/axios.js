import { createCards,search, filterHouse } from "./cards.js";

const SHOP_URL = `https://hp-api.onrender.com/api/characters`;
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');

export const getAxiosData = async (cardsParent = null) => {
  try {
    const { data } = await axios(SHOP_URL);
    createCards(data, cardsParent);
    search(data,cardsParent);
    filterHouse(data, tabsBtn, cardsParent)
  } catch (err) {
    console.error(err.message);
  }
};


