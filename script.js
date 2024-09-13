//function to get selected country weather reports.
//If you want to change country please change lat & lon values in fetch url
async function dogFacts() {
    const temp = [];
    try {
      for (let i = 0; i < 10; i++) {
        const response = await fetch("https://dog-api.kinduff.com/api/facts");
        const data = await response.json();
        temp.push(data);
      }
  
      console.log(temp);
  
      let container = document.createElement("div");
      container.setAttribute("class", "container");
  
      let row = document.createElement("div");
      row.setAttribute("class", "row m-5");
  
      temp.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card mt-3 bs");
  
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body text-center");
        card.appendChild(cardBody);
        let facts = document.createElement("h3");
        facts.setAttribute("class", "card-text");
        facts.innerText = e.facts[0];
        cardBody.appendChild(facts);
        row.appendChild(card);
      });
  
      container.appendChild(row);
      document.body.append(container);
    } catch (error) {
      console.log("Error while fetching API ! ", error);
    }
  }
  dogFacts();