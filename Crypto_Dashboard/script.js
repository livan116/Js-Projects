const box = document.getElementById("card-container");

const key =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true";
const api = fetch(key)
  .then((response) => response.json())
  .then((data) =>
    data.map(
      (item) =>
        (box.innerHTML =
          box.innerHTML +
          `
    <ul>
    <li>
    <img src = ${item.image} height=100px width = 100px> 
    </li>
    <li>
    Asset Name : ${item.name}
    </li>
    <li>
    Current Price : ${item.current_price}
    </li>
    <li id="change">
    Price Percentage Change : ${item.price_change_percentage_24h}%
    </li>
    </ul>`)
    )
  );

  
