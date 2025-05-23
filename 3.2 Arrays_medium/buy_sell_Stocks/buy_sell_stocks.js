// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//Brute force approach
let prices = [7,1,5,3,6,4];
let fp = 0;
let p = 0;

for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        p = prices[j] - prices[i];
        if(p>fp){
            fp = p;
        }
    }
}
console.log(fp)

//optimize approach
let minPrice = Infinity;
let maxProfit = 0;

for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i]; // update min price
    } else {
        let profit = prices[i] - minPrice; // calculate profit
        if (profit > maxProfit) {
            maxProfit = profit; // update max profit
        }
    }
}

console.log(maxProfit); // Output: 5
