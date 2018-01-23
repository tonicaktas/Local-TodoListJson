angular.module("todoListApp")// leta efter befintlig module
.directive('helloWorld',function(){ //atacha ny directive till modulen. helloWorld= namn på directive.
  return {
    template: "This is it"
  }
})
