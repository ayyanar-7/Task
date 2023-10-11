var app = angular.module("test", []);
app.controller("t", function($scope){
    $scope.result = "";

    $scope.clear = function () {
        $scope.result = "";
    };

    $scope.backspace = function () {
        $scope.result = $scope.result.slice(0, -1);
    };

    $scope.append = function (value) {
        $scope.result += value;
    };

    $scope.delete = function () {
        $scope.display = 0;
    };
    var symbols = [];
    $scope.$watch("result", function(newValue){
       
        $scope.display = 0;

        if(newValue){
            var numbers = newValue.split(/[+\-\*\/\%]/).filter(e => e != isNaN(e)).map(parseFloat);
            var symbols = newValue.split(/[0-9.]+/).filter(function(e){
                return e != "";
            });

       
            var summation = bodmas(numbers, symbols);
        
            console.log("sum: " + summation);
            
            $scope.display  = summation;
        }
        
    });
 
    $scope.append = function(value){
        $scope.result += value;
    }

    function bodmas(num, sym){
        
        for(let i = 0;i < sym.length;i++){
         
            if(sym[i] == '*'){
                num[i] = num[i] * num[i + 1];
                sym.splice(i, 1);
                num.splice(i + 1, 1);
                i--;
            }
            else if(sym[i] == '/'){
                num[i] = num[i] / num[i + 1];
                sym.splice(i, 1);
                num.splice(i + 1, 1);
                i--;
            }
            else if(sym[i] == '%'){
                num[i] = num[i] / 100;
                symbols.splice(i, 2);
                sym.splice(i, 1);
            }
            console.log("i"+ i);
            console.log("num "+num);
            console.log('Symbols'+symbols);
            console.log("Sym "+sym);
        }
        let sum = num[0];
        for(let i = 0;i < sym.length;i++){
        
            if(sym[i] == '+'){
                sum += num[i + 1];
            }
            else if(sym[i] == '-'){
                sum -= num[i + 1];
            }
            
        }
        return sum;
    }


});