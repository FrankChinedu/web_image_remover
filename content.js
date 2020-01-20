console.log("Hello from your Chrome extension!");
console.log('chromeee==', chrome);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        const images = document.querySelectorAll('img');
        console.log('image', images);
        images.forEach(img => {
            img.src = 'no_img.png'
        });
      }
    }
  );