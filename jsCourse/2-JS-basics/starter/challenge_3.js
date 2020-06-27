
let totalBill = function(billAmount){
	if(billAmount < 50)
		return (billAmount * 1.2).toFixed(2);

	else if(billAmount <= 200)
		return (billAmount * 1.15).toFixed(2);

	else
		return (billAmount * 1.1).toFixed(2);
}

let finalPayments = [];
let allTips = [];

let bills = [124, 48, 268];

for(i=0; i < bills.length; i++){
	finalPayments.push(totalBill(bills[i]));
	allTips.push( (finalPayments[i] - bills[i]).toFixed(2) );
}

console.log("All tips: " + allTips);
console.log("Final Payments: " + finalPayments);