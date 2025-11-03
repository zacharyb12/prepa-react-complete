// Service basique pour Futurama API
// Un service = des fonctions pour appeler une API

// Fonction pour récupérer les infos
export const getInfo = async () => {
  const response = await fetch('https://api.sampleapis.com/futurama/info');
  return response.json();
};

// Fonction pour récupérer les personnages
export const getCharacters = async () => {
  const response = await fetch('https://api.sampleapis.com/futurama/characters');
  return response.json();
};

// Fonction pour récupérer le casting
export const getCast = async () => {
  const response = await fetch('https://api.sampleapis.com/futurama/cast');
  return response.json();
};

// Fonction pour récupérer les épisodes
export const getEpisodes = async () => {
  const response = await fetch('https://api.sampleapis.com/futurama/episodes');
  return response.json();
};

// Fonction pour récupérer les questions
export const getQuestions = async () => {
  const response = await fetch('https://api.sampleapis.com/futurama/questions');
  return response.json();
};

// Fonction pour récupérer l'inventaire
export const getInventory = async () => {
  const response = await fetch('https://api.sampleapis.com/futurama/inventory');
  return response.json();
};

// C'est tout ! Un service = des fonctions d'API
