/********************* Coding Challenge 4 *********************/
/**
 1. Create an object for Mark and John with fields for:
	full name, mass, and height.
 2. Add a method to each object to calculate the BMI.
	Save the BMI to the object and also return it from the method.
 3. Finally, print who has the highest BMI together with the full
 name and the BMI
  BMI = mass / height^2 in kg and meters.
 */

 let john = {
	 fullName: 'John Smith',
	 mass: 81.65,
	 height: 1.85,
	 BMI: 0,

	 calcBMI: function(){
		 this.BMI = this.mass / Math.pow(this.height, 2);
		 return this.BMI;
	 }
 };

 let mark = {
	 fullName: 'Mark Miller',
	 mass: 72.57,
	 height: 1.73,
	 BMI: 0,	
	 
	 calcBMI: function(){
		this.BMI = this.mass / Math.pow(this.height, 2);
		return this.BMI;
	}
 };

 let johnBMI = john.calcBMI();
 let markBMI = mark.calcBMI();


 console.log(john);
 console.log(mark);

 if(johnBMI > markBMI)
	 console.log("John has the highest BMI: " + johnBMI.toFixed(2));
	 
 else if(markBMI > johnBMI)
	 console.log("Mark has the highest BMI: " + markBMI.toFixed(2));
	 
 else	
	 console.log("John and Mark have the same BMI: " + johnBMI.toFixed(2));

