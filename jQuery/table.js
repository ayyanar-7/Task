var obj = {};

obj.table = (
    function(){
        function mul(){
            var str, arr, table;
            table = [];
            str = $("#input").val();
            arr = str.split(",");
            table.push("<table>");
            table.push("<tr>");
            for(let i = 1;i <= 10;i++){ 
                table.push("<td>");   
                arr.forEach(e => {  
                    table.push(i + " * " + e + " = " + i * e + "   ");    
                });
                table.push("</td>");
            };
            table.push("</tr>");
            table.push("</table>");
            $("#p").html(table);

        }
        return{
            mul: mul
        }
    }
)();

$(
    function(){
        $("#gen").click(
            function(){
                obj.table.mul();
            }
        );
    }
);