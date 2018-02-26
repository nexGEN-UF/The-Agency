(function() {
  angular.module('Project100')
        .factory('StudentService', StudentService);

  StudentService.$inject = ['$http'];

  function StudentService($http){
    init();
    var students = [];

    return {
      get: getAllStudents,
      create: createOneStudent,
      update: updateOneStudent,
      delete: deleteOneStudent
    };

    function init(){ // this is going to make our first data request upon file load
      $http.get('/students')
      .then(function(response){
        students = response.data.students;
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function getAllStudents(){
      return students;
    }

    function createOneStudent(student){
      $http.post('/students', student)
      .then(function(response){
        students.push(student);
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function updateOneStudent(index, updatedStudent){
      $http.put('/students/', updatedStudent._id, updatedStudent)
            .then(function(response){
              students.splice(index, 1, updatedStudent);
            })
            .catch(function(){
              console.log(err);
            });
    }
    function deleteOneStudent(index, deletedStudent){
      $http.delete('/students/', deletedStudent._id)
          .then(function(){
            students.splice(index, 1);
          })
          .catch(function(){
            console.log(err);
          });
    }
  }
}());
