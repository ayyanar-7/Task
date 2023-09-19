var simple = {};

simple.int = (
    function(){
       
        function calculation(){
            var p = $("#p").val();
            var n = $("#n").val();
            var r = $("#r").val();

            var si = (p * n * r) / 100;

            $("#result").html("Simple Interest = " + si);
        }
        return{
            calculation: calculation
        }
    }
)();

$(
    function(){
        $("#display").click(
            function(){
                simple.int.calculation();
            }
        );
    }
);





















