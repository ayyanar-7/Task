// $(document).ready(
//     function(){
//         alert("Hello World!");
//         }
// );

var simple = {};

simple.sen = (
    function(){
        function display(){
            var a = $("#apple").val();
            var name = $("#name").val();
            $("#demo").html("Welcome Mr." + name * a);
        }
        return {
            display: display
        };
    }
)();

$(
    function(){
        $("#save").click(
            function(){
                simple.sen.display();
            }
        )
    }
)

