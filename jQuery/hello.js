// $(document).ready(
//     function(){
//         alert("Hello World!");
//         }
// );

var simple = {};

simple.sen = (
    function(){
        function display(){
            var name = $("#name").val();
            $("#demo").html("Welcome Mr." + name);
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

