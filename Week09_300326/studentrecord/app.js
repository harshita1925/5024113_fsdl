var app = angular.module("studentApp", []);

app.controller("studentController", function($scope) {
    $scope.students = [];
    $scope.editIndex = null;
    $scope.student = {};

    // Add or Update student
    $scope.addStudent = function() {
        if (!$scope.studentForm.$valid) return;

        if ($scope.editIndex === null) {
            // Add new student
            $scope.students.push(angular.copy($scope.student));
        } else {
            // Update existing student
            $scope.students[$scope.editIndex] = angular.copy($scope.student);
            $scope.editIndex = null;
        }

        $scope.student = {};
        $scope.studentForm.$setPristine();
        $scope.studentForm.$setUntouched();
    };

    // Edit student
    $scope.editStudent = function(index) {
        $scope.student = angular.copy($scope.students[index]);
        $scope.editIndex = index;
    };

    // Delete student
    $scope.deleteStudent = function(index) {
        if (confirm("Are you sure you want to delete this record?")) {
            $scope.students.splice(index, 1);
        }
    };
});