var apiKey = require('./../.env').apiKey;

function Git(){
}

Git.prototype.getUsers = function(git_user){
  $.get('https://api.github.com/users/' + git_user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".users").html("");
    $(".users").append(

            "<div>" +
                "<h1 class="text-center">" + response.login + "</h1>" +
                "<img width='475' height='349' src='" + response.avatar_url + "' alt='avatar'>" +
            "</div>"
        );

  }).fail(function(error){
    console.log(error.responseJSON.message);
    $("users").text("Not Found");
  });
};

Git.prototype.getRepos = function(git_user){
  $.get('https://api.github.com/users/' + git_user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".repos").html("");
    for(var i=0; i<response.length;i++){
    $(".repos").append("<li>" + response[i].name + "<ul><li>" + response[i].created_at +  "<li>" + response[i].description + "</li></ul>" + "</li>");
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $("repos").text("Not Found");
  });
};


exports.gitModule = Git;

var Git = require('./../js/git.js').gitModule;

$(document).ready(function() {
  var currentGit = new Git();

  $('#github-form').submit(function(event) {
    $(".results").html("");
    event.preventDefault();

    var git_user = $('#github_name').val();
    $('#github_name').val("");
    currentGit.getUsers(git_user);
    currentGit.getRepos(git_user);
  });
});

