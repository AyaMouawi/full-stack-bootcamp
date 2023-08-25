// Step 1 

setTimeout(() => {
    console.log("Hello after 5 seconds!");
  }, 5000);

  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  setInterval(updateClock, 1000);

  function delayedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 2000);
    });
  }
  
  delayedPromise()
    .then((message) => {
      console.log(message);
      return "Chained message!";
    })
    .then((chainedMessage) => {
      alert(chainedMessage);
      console.log(chainedMessage);
    })
    .catch((error) => {
      console.error("Error:", error);
    });


//Step 2 

function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000); 
    });
  }
  
  simulateNetworkRequest()
    .then((data) => {
      console.log(data); 
    })
    .catch((error) => {
      console.error(error);
    });


    async function fetchPost() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const postData = await response.json();
          console.log(postData);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      }
      
      fetchPost();


// Step 3 I didnt understand the given not even from chatgpt 