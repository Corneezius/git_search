var apiKey = require('./../.env').apiKey;

function Git(){
}

Git.prototype.getRepos = function(git_user){
  $.get('https://api.github.com/users/' + git_user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
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
    currentGit.getRepos(git_user);
  });
});

