// Getting element by ID 
let calculateBtn = document.getElementById('calculateBtn');

let calculate = function(){

	// Getting elements by ID 
    let totalBill   = document.getElementById('totalBill');
    let servicePerc = document.getElementById('servicePerc');
    let numPeople   = document.getElementById('numPeople');
    let result      = document.getElementById('result');

    // Validate Input
    let error = 0;
    
    // Check if the totalBill is empty
    if (totalBill.value == "") {
    	totalBill.style.borderColor = "#fc8370";
    	error = 1;
    }else {
    	totalBill.style.borderColor = "#80a7b8";
    	error = 0;
    }

    // Check if the service percentage is 0
    if (servicePerc.value == 0) {
    	servicePerc.style.borderColor = "#fc8370";
    	error = 1;
    }else {
    	servicePerc.style.borderColor = "#80a7b8";
    	error = 0;
    }

    // Check if there is no error
    if (!error) {

    	let tip = 0;

    	// Calculate tip
    	let tipInit = totalBill.value * servicePerc.value;

    	/** 
    	  if more than one people are sharing
    	  the bill and not empty
    	 **/
    	if (numPeople.value != 1 && numPeople.value != "") {
            
            // Tip divided by the people that sharing the bill
            let tipEach = tipInit / numPeople.value;

            // round to two decimal places
            let tipEachRounded = Math.round(tipEach * 100) / 100;

            /**
	          The next line allows us to always 
	          have two digits after decimal point
	        **/
	        tipEachRounded = tipEachRounded.toFixed(2);

	        /**
	          If the tip rounded to 0 assign tipEach 
	          else assign tipEachRounded. and 'each' string
	        **/

	        tip = tipEachRounded == 0 ? tipEach + ' each' : tipEachRounded + ' each';
    	}else {
    		// round to two decimal places
    		let tipRounded = Math.round(tipInit * 100) / 100;

    		/**
	          The next line allows us to always 
	          have two digits after decimal point
	        **/
	        tipRounded = tipRounded.toFixed(2);

	         /**
	          If the tip rounded to 0 assign tipInit 
	          else assign tipRounded.
	        **/
	        tip = tipRounded == 0 ? tipInit : tipRounded;
    	}
        
        // Print out the result
    	result.innerText = tip;
    }else {
    	return;
    }
}

// adding click Event to the calculate Button
calculateBtn.addEventListener('click', calculate);