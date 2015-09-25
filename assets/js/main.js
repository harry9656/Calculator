$(document).ready(function(){
	var register = [];
	var value = "0";
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
			case "=": evaluateRegister();
			break;
		}

		function add(data){
			if(register.length === 0) clearRegister(); 
			var lastValue = register[register.length-1];
			if((register.length !== 0) && (data === "+" || data === "-" || data === "*" || data === "/")){
				if(!(lastValue !== "+" && lastValue !== "-" && lastValue !== "*" && lastValue !== "/")){
					register[register.length-1] = data;
				} else {
					register.push(data);
				}
				$(".register").html(register);
				value = "0";
			}
			if($.isNumeric(data)){
				register.push(data);
				if(value == "0"){
					value = ""+data+""; // Avoid coercion
				} else {
					value = value + data;
				}
			}
			$(".calculatorScreen").html(value);
		}
		function evaluateRegister(){
			var lastValue = register[register.length-1];
			if(lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "/"){
				register.pop();
			}
			$(".register").html(register.join("") + "=");
			$(".calculatorScreen").html(eval(register.join("")));
			register = [];
			value = "0";
		}
		function clearRegister(){
			register = [];
			$(".register").html(register.join(""));
			value = "0";
			$(".calculatorScreen").html(value);
		}
	});
});