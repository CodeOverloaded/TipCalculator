$(document).ready(function(){
    $("#button").click(function(){
        var cost = $("#cost").val();
        var tip = $("#tip").val();
        var total = 0;
        switch(tip){
            case("1"):
                total = cost*(1.1);
                break;
            case("2"):
                total = cost*(1.2);
                break;
        }

        $("#result").html(total);
    });  
});