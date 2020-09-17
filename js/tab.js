$(function () {
    $("#open").click(function() {
        $("#open").addClass("active");
        $("#close").removeClass("active");
    });

    $("#close-dept").click(function() {
        $("#open-dept").removeClass("active");
        $("#close-dept").addClass("active");
    });

    $("#open-rank").click(function() {
        $("#open-rank").addClass("active");
        $("#close-rank").removeClass("active");
    });

    $("#close-rank").click(function() {
        $("#open-rank").removeClass("active");
        $("#close-rank").addClass("active");
    }); 

    $("#open-recruit").click(function() {
        $("#open-recruit").addClass("active");
        $("#close-recruit").removeClass("active");
    });

    $("#close-recruit").click(function() {
        $("#open-recruit").removeClass("active");
        $("#close-recruit").addClass("active");
    }); 
});