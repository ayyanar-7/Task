var calsi = {};
var buttons = {};

buttons.functions = (
    function(){
        function append(value){
            var input = document.getElementById("input");
            input.value += value;
        }
        function clear(){
            var input = document.getElementById("input");
            input.value = "";
            var display = document.getElementById("display");
            display.innerHTML = 0;
        }
        function backSpace(){
            var input = document.getElementById("input");
            input.value = input.value.slice(0, -1);
            
            (input.value) ? calsi.functions.calculator(): clear();
        }
        function input(){
            var input = document.getElementById("input").value;
            return input;
        }
        return{
            append: append, clear: clear, 
            backSpace: backSpace, input: input
        }
    }
)();


function append(value){
    buttons.functions.append(value);
}


calsi.functions = (
    function(){  
        function stackGeneration(input){
            let numbers = [];
            let symbols = [];
            input.forEach(e => {
                if(e.match(/\d+/)){
                    numbers.push(e);
                }else if(e.match(/[\+\-\*\/]/)){
                    symbols.push(e);
                }
            });
           
            numbers = numbers.reverse();
            symbols = symbols.reverse();
            return { numbers, symbols };
        }


        function reset(num, sym){
            var numbers = [];
            var symbols = [];
            symLen = sym.length;
            for(let i = 0;i < symLen;i++){
                symbols.push(sym.pop());
            }

            let numLen = num.length;
            for(let i = 0;i < numLen;i++){
                numbers.push(num.pop());
            }
          
            return { numbers, symbols };
        }


        function bracket(input){
            let len = input.length;
            let index;
            let ans;
            let string;
            for(let i = 0;i < len;i++){
                let found = false;
                let j;
                if(input[i] == '('){
                    index = i;
                    string = [];
                    for(j = i + 1;j < len;j++){
                        if(input[j] == ')'){ 
                            ans = calculate(string);
                            found = true;
                            break;
                        }
                        else if(input[j] == '('){
                            index = j;
                            string = [];
                        }else{
                            string.push(input[j]);
                        }
                    }
                }
                if(found){
                    input.splice(index,j - index + 1, ans.toString() );
                }
            }
    
            return input;            
        }
        function order(input){
            let i = 0;
            while(input[i]){
                if(input.length - 1 != i){
                    if((input[i].match(/[\d]+/) && input[i + 1] == '(') || 
                    (input[i] == ')' && input[i + 1].match(/[\d]+/)) ||
                    (input[i] == ')' && input[i + 1] == '(')){
                        input = input.substring(0, i + 1) + '*' + input.substring(i + 1, input.length + 1);
                    }
                }
                
                i++;
            }

            return input;
        }

        function formulate(input){
            let ans;
            let string;
            let i = 0;
            input = order(input);
            input = input.match(/[\d]+|[\+\-\*\/\(\)]/g);
            while(input[i]){
                if(input[i] == '('){
                    input = bracket(input);
                }
                i++;
            }
            ans = calculate(input);

            return ans;
        }


        function calculate(input){
            if(input[0] == '-'){
                input.unshift('0');
            }
            input = bracket(input);
            let string = stackGeneration(input);
            let numbers = string.numbers;
            let symbols = string.symbols;
            let ans = numbers[0];
            let num = [];
            let sym = [];
            let len = symbols.length;
        
            while(symbols.length > 0){
                
                let symbol = symbols.pop();
                let num1, num2;
                switch(symbol){
                    case '*':
                        num1 = parseFloat(numbers.pop());
                        num2 = parseFloat(numbers.pop());
                        ans = num1 * num2;
                        numbers.push(ans);
                        break;
                    case '/':
                        num1 = parseFloat(numbers.pop());
                        num2 = parseFloat(numbers.pop());
                        ans = num1 / num2;
                        numbers.push(ans);
                        break;
                    default:
                        num.push(numbers.pop());
                        sym.push(symbol);
                }
              
                
            }
            num.push(numbers.pop());
            string = reset(num, sym);
            numbers = string.numbers;
            symbols = string.symbols;
            len = symbols.length;
            for(let i = 0;i < len;i++){
                
                var symbol = symbols.pop();
                switch(symbol){
                    case '+':
                        num1 = parseFloat(numbers.pop());
                        num2 = parseFloat(numbers.pop());
                        ans = num1 + num2;
                        break;
                    case '-':
                        num1 = parseFloat(numbers.pop());
                        num2 = parseFloat(numbers.pop());
                        ans = num1 - num2;
                        break;
                }
                numbers.push(ans);
            }
            
            return ans;
        }
        function calculator(){
            var display = document.getElementById("display");
            var input = document.getElementById("input").value;
            
            var ans = formulate(input);

            display.innerHTML = ans;
        }
        return{
            calculator: calculator
        }
    }
)();



document.addEventListener("DOMContentLoaded", function(){
    var display = document.getElementById("display");
    display.innerHTML = 0;
});

