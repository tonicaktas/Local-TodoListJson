'use strict';

angular.module("todoListApp")// addar controller till denna modulen



.service('dataService', function($http){

  //get data från json
  this.getTodos = function(callback){
    $http.get('todojson/todo.json').then(callback)
  }

  //radera data
  this.deleteTodo = function(todo){

  };

  //spara todo
  this.saveTodos = function(todo){
    
  };
});
