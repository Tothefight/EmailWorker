document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['geminiApiKey'], result => {
      const statusDiv = document.getElementById('apiKeyStatus');
      statusDiv.textContent = result.geminiApiKey ? 'API key is set.' : 'API key is missing.';
    });
  });
  
  document.getElementById('saveApiKey').addEventListener('click', () => {
    // ... (Save API key logic - same as before)
  });
  
  document.getElementById('openOptions').addEventListener('click', () => {
       if (chrome.runtime.openOptionsPage) {
          chrome.runtime.openOptionsPage();
      } else {
          window.open(chrome.runtime.getURL('options.html'));
      }
  });