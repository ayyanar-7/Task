var obj = {};

obj.convert = (
    function(){
        function fahren(c){
            var f;
            f = (5 / 9) * c + 32;
            return f;
        }
        function display(){
            var arr= [];
            var from = parseFloat($("#from").val());
            var to = parseFloat($("#to").val());
            for(let i = from;i <= to;i++){
                arr.push("<tr>")
                arr.push("<td class = 'cel'>" + i + "</td>");
                arr.push("<td class = 'fah'>" + fahren(i).toFixed(2) + "</td>");
                arr.push("</tr>");
            }
            $("#div").html(arr);
        }
        return{
            display: display
        }
    }
)();

$(
    function(){
        $("#chart").click(
            function(){
                obj.convert.display();
            }
        );
    }
);