$(document).ready(function(){
	var register = [];
	$(".register").html("0");
	$("li").click(function(){		
		var button = $(this).html();
		switch(button){
			case "0": add(0);
			break;
			case "1": add(1);
			break;
			case "2": add(2);
			break;
			case "3": add(3);
			break;
			case "4": add(4);
			break;
			case "5": add(5);
			break;
			case "6": add(6);
			break;
			case "7": add(7);
			break;
			case "8": add(8);
			break;
			case "9": add(9);
			break;
			case "Clear": clearRegister();
			break;
			case "+": add("+");
			break;
			case "-": add("-");
			break;
			case "x": add("*");
			break;
			case "/": add("/");
			break;
			case "(": add("(");
			break;
			case ")": add(")");
			break;
			case ".": add(".");
			break;
			case "=": evaluateRegister();
			break;
		}

		function add(data){
			var lastValue = register[register.length-1];
			if((register.length !== 0) && /[+\-*\/]/.test(data)){
				// Check if the expression has been evaluated
				if(/[=]/.test(register.join(""))) register.shift();
				// Don't concatenate operators
				if(/[+\-*\/]/.test(lastValue)){
					register[register.length-1] = data;
				} else {
					register.push(data);
				}
			} else if(/[0-9]/.test(data) || /[\(\).]/.test(data)){
				if(/[=]/.test(register.join(""))) clearRegister();
				register.push(data);
			}
			// update screen
			$(".register").html(register);
		} // add function

		function evaluateRegister(){
			var lastValue = register[register.length-1];
			if(/[+\-*\/]/.test(lastValue)){
				register.pop();
			}
			var evaluation = eval(register.join(""));
			$(".register").html(register.join("") +"="+ evaluation);
			// update the register with = in front to let know that expresison has been evaluated
			register = ["=",evaluation];
		} // evaluateRegister function

		function clearRegister(){
			register = [];
			$(".register").html("Cleared");
		}
	});
});