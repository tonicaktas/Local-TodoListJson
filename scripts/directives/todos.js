angular.module('todoListApp')
.directive('todos',function(){ // namn på directive
  return {
    templateUrl: 'templates/todos.html', // visa denna template
    controller: 'mainCtrl' // denna controller gäller
  }
})
