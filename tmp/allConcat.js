// var apiKey = require('./../.env').apiKey;
//
// exports.getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

var apiKey = "4ea9148c31a08b4dd452c9772125d0c4041a7238";

function Git(){
}

Git.prototype.getRepos = function(git_user){
  $.get('https://api.github.com/users/' + git_user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


// var displayGithubs = function(name) {
//   $('.showGithub').text("The humidity in " + city + " is " + humidityData + "%");
// }

$(document).ready(function() {
  var currentGit = new Git();
  $('#github-form').submit(function(event) {
    $(".results").html("");
    event.preventDefault();
    var git_name = $('#github_name').val();
    $('#github_name').val("");
    currentGit.getRepos(git_name);
  });
});

