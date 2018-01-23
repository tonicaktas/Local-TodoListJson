'use strict';

angular.module("todoListApp")// addar controller till denna modulen

.controller('mainCtrl',function($scope, dataService){ // $scope och services

  $scope.helloC = dataService.helloC;

  $scope.addTodo = function(){ // lägger till ny todo på top
    var todo = {
      namn: "ny grej"
    };
    $scope.todos.unshift(todo);
  }


dataService.getTodos(function(response){ // får response data från then(callback) i getTodos() i data.js i services
  $scope.todos = response.data; // sparar response i todo för att kunna loopa igenom och visa de 
  console.log(response.data);
  });

  $scope.deleteTodo = function(todo, $index){ // callback för indetifiera och index
    dataService.deleteTodo(todo); // funktion från dataService som tar bort todo
    $scope.todos.splice($index, 1);  // säger till vilken todo ska bort
  };

  $scope.saveTodos = function(){
    var filteredTodos = $scope.todos.filter(function(todo){ //hämtar alla todo från todos som har blivit editerade och skapar ny objekt som returnas
      if(todo.edited){
        return todo;
      };
    });
    dataService.saveTodos(filteredTodos);
    console.log('Sparad')
  };
})
