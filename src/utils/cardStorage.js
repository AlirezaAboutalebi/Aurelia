const STORAGE_KEY = 'openedCards'; // Key used in localStorage

// Function to get the opened cards from localStorage
export const getOpenedCards = () => {
  const storedCards = localStorage.getItem(STORAGE_KEY);
  return storedCards ? JSON.parse(storedCards) : [];
};

// Function to save opened cards to localStorage
export const saveOpenedCards = (newCards) => {
  const currentOpenedCards = getOpenedCards();
  const updatedOpenedCards = [...currentOpenedCards, ...newCards]; 
  const uniqueOpenedCards = [...new Set(updatedOpenedCards)]; 

  localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueOpenedCards));
};

// Function to clear all opened cards from localStorage 
export const clearOpenedCards = () => {
  localStorage.removeItem(STORAGE_KEY);
};
