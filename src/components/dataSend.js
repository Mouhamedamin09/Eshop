export default async function sendDataToGoogleSheets(data) {
    const url = 'https://script.google.com/macros/s/AKfycbzgrNe-c7E18N_7-5ZeRBviC-bA07w2nvSGNhQa0jf0U3Z-GXRxzOOlYxcjqmAdtwnqzQ/exec'; // Replace with your actual deployed script URL

    
  
    try {
      const response = await fetch(url, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.text();
      console.log('Response from Google Sheets:', result);
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
    }
  }
  
  // Example usage:
  
 