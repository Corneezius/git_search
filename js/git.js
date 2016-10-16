var apiKey = require('./../.env').apiKey;

function Git(){
}

Git.prototype.getRepos = function(git_user){
  $.get('https://api.github.com/users/' + git_user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".result").html("");
    $(".result").append(

            "<div>" +
                "<h1>" + response.login + "</h1>" +
                "<img width='233' height='233' src='" + response.avatar_url + "' alt='avatar'>" +
            "</div>"
        );

  }).fail(function(error){
    console.log(error.responseJSON.message);
    $("name").text("Not Found");
  });
};




exports.gitModule = Git;
