(function() {
  angular.module('Project100')
        .factory('StudentService', StudentService);

  StudentService.$inject = ['$http'];

  function StudentService($http){
    init();
    var students = [];

    return {
      get: getAllstudents,
      create: createOnestudent,
      update: updateOnestudent,
      delete: deleteOnestudent
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

    function getAllstudents(){
      return students;
    }

    function createOnestudent(student){
      $http.post('/students', student)
      .then(function(response){
        students.push(student);
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function updateOnestudent(index, updatedstudent){
      $http.put('/students/', updatedstudent._id, updatedstudent)
            .then(function(response){
              students.splice(index, 1, updatedstudent);
            })
            .catch(function(){
              console.log(err);
            });
    }
    function deleteOnestudent(index, deletedstudent){
      $http.delete('/students/', deletedstudent._id)
          .then(function(){
            students.splice(index, 1);
          })
          .catch(function(){
            console.log(err);
          });
    }
  }
}());
