 'use strict';

angular.module('petsroomApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-petsroomApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-petsroomApp-params')});
                }
                return response;
            }
        };
    });
