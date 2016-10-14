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
