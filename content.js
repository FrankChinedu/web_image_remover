console.log("Hello from your Chrome extension!");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.src = 'no_img.png'
            img.srcset = 'no_img.png'
        });
      }
    }
  );