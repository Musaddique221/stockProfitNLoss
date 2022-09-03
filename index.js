const initialPrice = document.querySelector("#initial-price");
const stocksQty = document.querySelector("#stocks-qty");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

const calculateProfitAndLoss = (initial, qty, current) => {
  if (!isNaN(initial, qty, current))
    if (initial && current && qty)
      if (initial > current) {
        let loss = (initial - current) * qty;
        let lossPercentage = (loss / initial) * 100;
        lossPercentage = lossPercentage.toFixed(1);
        outputBox.style.color = "red";
        showOutput(
          `Hey, The loss is ${loss} and loss percent is ${lossPercentage}% 😞`
        );
      } else if (current > initial) {
        let profit = (current - initial) * qty;
        let profitPercentage = (profit / initial) * 100;
        profitPercentage = profitPercentage.toFixed(1);
        outputBox.style.color = "green";
        showOutput(
          `Hey, The profit is ${profit} and profit percent is ${profitPercentage}% 🥳 `
        );
      } else {
        outputBox.style.color = "#ca8a04";
        showOutput("No profit, No loss 😌");
      }
    else {
        outputBox.style.color = "blue";
      showOutput("Please fill out all fields 👆😠");
    }
  else {
    outputBox.style.color = "brown";
    showOutput("Please enter the fields in number 😑");
  }
};

const submitHandler = () => {
  let ip = Number(initialPrice.value);
  let sqty = Number(stocksQty.value);
  let curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, sqty, curr);
};

function showOutput(msg) {
  outputBox.innerText = msg;
}

submitBtn.addEventListener("click", submitHandler);
