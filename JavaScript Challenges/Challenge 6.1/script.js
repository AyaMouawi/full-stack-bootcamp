// Step 1 

function delay(milliseconds) {
    return new Promise((resolve) => 
    setTimeout(() => 
    resolve(), milliseconds));
  }

  delay(10000) 
  .then(() => {
    console.log("Delay complete!");
  });


  // Step 2 

  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(response => response.json())
  .then(data => {
    const fact = data.text;
    console.log("Random Fact:", fact);
  })
  .catch(error => {
    console.error("Error fetching random fact:", error);
  });


  // Step 3 
  async function fetchRandomFact() {
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      const fact = data.text;
      console.log("Random Fact:", fact);
    } catch (error) {
      console.error("Error fetching random fact:", error);
    }
  }
  
  fetchRandomFact();


  // Step 4 
  let array = [];

async function fetchMultiple() {
  try {
    array.push(
      await Promise.all([
        fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()),
        fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()),
        fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
      ])
    );
    console.log(array);
  } catch (error) {
    console.log("error", error);
  }
}

fetchMultiple();



  
