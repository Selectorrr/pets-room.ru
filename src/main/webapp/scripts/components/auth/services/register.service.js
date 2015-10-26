'use strict';

angular.module('petsroomApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


