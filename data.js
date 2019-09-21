$(document).ready(function(){
    var api_url = "https://reqres.in/api/users?page=2";

    $.ajax({
        url: api_url,
        contentType: "application/json",
        datatype: "json"
    }).done(function(data){
        console.log(data);
        $.each(data.data, function(index, obj){
            console.log(obj);
            $("#list").append("<li>" + obj.first_name + " " + obj.last_name +"</li>");
        });
    });
});