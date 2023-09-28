var app = angular.module("test", []);
app.controller("t", function($scope){
    $scope.result = "";
    $scope.display = 0;

    $scope.keyup = function (event) {
        const key = event.key;
        if(key.length === 1){
            $scope.result += key;
        }
  
    };
    // $scope.keydown = function(event) {
    //     var key = event.key;
    //     if (key === 'Backspace') {
    //         event.preventDefault();
    //         if ($scope.result.length > 0) {
    //             $scope.result = $scope.result.slice(0, -1);
    //         }
    //     } else if (key.length === 1 && key >= '0' && key <= '9') {
    //         $scope.result += key;
    //     }
    // };
    

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
    $scope.$watch("result", function(newValue){
       

        if(newValue){
            var numbers = newValue.split(/[+\-\*\/]/).map(parseFloat);
            var symbols = newValue.split(/\d+/).filter(e => {
                if(e != ""){
                    return e;
                }
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