const createNewApp = async () => {
    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Failed to create a new app.');
      }
  
      const data = await response.text();
      console.log('New app created! Unique identifier:', data);
      return data;
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  createNewApp();
  
  