import { CategoryEnum, exrCard } from './constants.js';

export function configureScroll() {
  if (!exrCard) return;
  const cardHeight = exrCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

export function getCategoryKey(categoryName) {
  for (const key in CategoryEnum) {
    if (CategoryEnum[key].toLowerCase() === categoryName.toLowerCase()) {
      return key;
    }
  }
  return null;
}

export function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

 export function truncateText(text, maxLength) {
   if (text.length > maxLength) {
     return text.slice(0, maxLength) + '...';
   }
   return text;
 }

 export function formatToSingleDecimal(number) {
   return parseFloat(number.toFixed(1));
 }