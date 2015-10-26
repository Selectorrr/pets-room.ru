'use strict';

angular.module('petsroomApp')
    .controller('MainController', function ($scope, Principal) {
        $scope.person = { fname: 'Clark', lname: 'Kent' };
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
    });
