(function () {
  angular.module('Project100')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'StudentService'];

function MainController($scope, StudentService){
  $scope.students = StudentService.get();
  $scope.createStudent = createStudent;
  $scope.deleteStudent = deleteStudent;
  $scope.editStudent = editStudent;
  $scope.saveStudent = saveStudent;

  $scope.$watch(function(){
     return StudentService.get();
   }, function(){
     $scope.students = StudentService.get();
   });

  function createStudent(newStudent){
    StudentService.create(newStudent);
    $scope.newStudent = '';
  }

  function deleteStudent(index, student){
    StudentService.delete(index, student);
  }

  function editStudent(student){
    student.isBeingEdited = true;
  }

  function saveStudent(index, student){
    StudentService.update(index, student);
    student.isBeingEdited = false;
  }

  }

}());
