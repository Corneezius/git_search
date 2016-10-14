(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey= "4ea9148c31a08b4dd452c9772125d0c4041a7238";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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


},{"./../.env":1,"./../js/git.js":2}]},{},[3]);
