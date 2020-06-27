/******************* Coding Challenge 5 ***********************/
/** Advanced Tip Calculator 
	- John and his family went to 5 different restaurants.
	The bills were $124, $48, $268, $180, and $42
	-John likes to tip 20% on bills less than $50, 15% on bills 
	between $50 and $200, and 10% if bill is more than $200

	1. Create an object with an array for the bill values
	2. Add method to calculate the tip
	3. Method should use loop to iterator over all paid bills
	to calculate tips
	4. For output: 
		- create a new array containing all tips
		- create an array containing final paid amount

	EXTRA:
	- Mark's family also went to 4 different restaurants
	- The bills were: $77, $375, $110, $45
	- Mark likes to tip 20% on bills less than $100, 10% on bills
	between $100 and $300, and 25% on bills more than $300.
	1. Implement the same funcionality this time using Mark's rules
	2. Create a function, not a method, to calculate average tips,
	Takes as arguments array of tips and returns average value
	3. Calculate average tip for each family
	8. Log to the console which family paid the highest tips on average
 */

 let johnsTrips = {
	bills: [124, 48, 268, 180, 42],
	tips: [],
	finalBills: [],

	tipCalculator: function(){
		for(let i=0; i < this.bills.length; i++){
			if(this.bills[i] < 50){
				this.tips[i] = this.bills[i] * 0.2;
			}
			else if(this.bills[i] >= 50 && this.bills[i] <= 200){
				this.tips[i] = this.bills[i] * 0.15;
			}
			else{
				this.tips[i] = this.bills[i] * 0.1;
			}
			
			this.finalBills[i] = this.bills[i] + this.tips[i];

		}
	}
 }; 

 console.log(johnsTrips);

 johnsTrips.tipCalculator();
 console.log(johnsTrips);
 console.log("Bills before tip: " + johnsTrips.bills);
 console.log("Bills after tip: " + johnsTrips.finalBills);
 console.log("Tips: " + johnsTrips.tips);

 let marksTrips = {
	bills: [77, 375, 110, 45],
	tips: [],
	finalBills: [],

	tipCalculator: function(){
		for(let i=0; i < this.bills.length; i++){
			if(this.bills[i] < 100){
				this.tips[i] = this.bills[i] * 0.2;
			}
			else if(this.bills[i] >= 100 && this.bills[i] <= 300){
				this.tips[i] = this.bills[i] * 0.1;
			}
			else{
				this.tips[i] = this.bills[i] * 0.25;
			}
			
			this.finalBills[i] = this.bills[i] + this.tips[i];

		}
	}
 };

 marksTrips.tipCalculator();
 console.log(johnsTrips);
 console.log("Bills before tip: " + marksTrips.bills);
 console.log("Bills after tip: " + marksTrips.finalBills);
 console.log("Tips: " + marksTrips.tips);

 function averageTip(tips){
	 let average = 0;
	 for(let i=0; i < tips.length; i++){
		 average += tips[i];
	 }
	 average /= tips.length;
	 return average;
 }

 let johnsAverage = averageTip(johnsTrips.tips);
 let marksAverage = averageTip(marksTrips.tips);

 if(johnsAverage > marksAverage)
	 console.log("John's family paid the highest tips on average: " + johnsAverage);

 else if(johnsAverage < marksAverage)
	 console.log("Mark's family paid the highest tips on average: " + marksAverage);
	 
 else
 	console.log("John's and Mark's family paid the same tips on average: " + johnsAverage);