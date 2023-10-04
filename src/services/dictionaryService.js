import axios from 'axios';


export const fetchWordDetails = async (word) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching word details:', error);
    throw error;
  }
};
