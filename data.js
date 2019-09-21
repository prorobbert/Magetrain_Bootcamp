$(document).ready(function(){
    var userTable = $("#users");

    $.ajax({
        url: "https://reqres.in/api/users?page=2",
        contentType: "application/json",
        datatype: "json"
    }).done(function(data){
        console.log(data);
        $.each(data.data, function(index, user){
            console.log(user);
            var userObject = createTableRow(user.avatar, user.first_name, user.last_name, user.email);
            userObject.hide().appendTo(userTable).show('normal');
        });
    });

    $("#btnAddUser").on("click", function(){
        var rnd = Math.floor(((Math.random() * 12) + 1));
        $.ajax({
            url: "https://reqres.in/api/users/" + rnd,
            contentType: "application/json",
            datatype: "json"
        }).done(function(user){
            console.log(user);
            var userObject = createTableRow(user.data.avatar, user.data.first_name, user.data.last_name, user.data.email);
            userObject.hide().appendTo(userTable).show("slow");
        });
    });
});

function createTableRow(avatar, firstName, lastName, email){
    return $("<tr><td><img src='"+ avatar+"' alt='avatar' class='avatar'></td><td>" + firstName + "</td><td>" + lastName +"</td><td>" + email + "</td></tr>");
}