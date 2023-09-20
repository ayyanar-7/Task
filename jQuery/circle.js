var obj = {};

obj.circle = (
    function(){
        var r;
        function area(){
            r = $("#input").val();
            var area;
            area = (22 / 7) * r * r;

            return area;
        }
        function circum(){
            r = $("#input").val();
            var cir;
            cir = 2 * (22 / 7) * r;

            return cir;
        }
        function result(){
            var result;
            result = [];
            result.push("Area of the circle: " + area().toFixed(2) + "<br>");
            result.push("circumference of the circle: " + circum().toFixed(2));

            $("#p").html(result);
        }

        return{
            result: result
        }

    }
)();

$(
    function(){
        $("#cal").click(
            function(){
                obj.circle.result();
            }
        );
    }
);