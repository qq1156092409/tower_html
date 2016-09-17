$(function(){
    var $body=$(document.body);
    $(document).on("click",function(){
        $(".popover-wrap:visible").hide();
    });
    $body.on("click",".popover",function(e){
        e.stopPropagation();
    });
    $body.on("click",".popover-btn",function(e){
        $(".popover-wrap:visible").hide();
        $(this).next().show();
    });
});