const PACK_STORAGE_KEY = 'openedPacks';

// Get the opened packs from localStorage
export const getOpenedPacks = () => {
  const storedPacks = localStorage.getItem(PACK_STORAGE_KEY);
  return storedPacks ? JSON.parse(storedPacks) : [];
};

// Save an opened pack to localStorage
export const saveOpenedPack = (packId) => {
  const currentOpenedPacks = getOpenedPacks();
  if (!currentOpenedPacks.includes(packId)) {
    currentOpenedPacks.push(packId);
  }
  localStorage.setItem(PACK_STORAGE_KEY, JSON.stringify(currentOpenedPacks));
};

// Clear all opened packs from localStorage
export const clearOpenedPacks = () => {
  localStorage.removeItem(PACK_STORAGE_KEY);
};
