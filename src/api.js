export default async function fetchItems() {
    try {
      const response = await fetch('http://localhost:3001/api/items');
      if (!response.ok) {
        throw new Error('Could not get items');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting items:', error);
      throw error;
    }
  };
  