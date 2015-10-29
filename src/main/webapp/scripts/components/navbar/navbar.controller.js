'use strict';

angular.module('petsroomApp')
    .controller('NavbarController', function ($scope, $location, $state, Auth, Principal, ENV) {
        $scope.isAuthenticated = Principal.isAuthenticated;
        $scope.$state = $state;
        $scope.inProduction = ENV === 'prod';
        //$scope.props = {
        //    state: $state
        //};

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };
    });
