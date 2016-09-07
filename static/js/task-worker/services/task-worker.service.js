/**
 * TaskWorkerService
 * @namespace crowdsource.task-worker.services
 */
(function () {
    'use strict';

    angular
        .module('crowdsource.task-worker.services')
        .factory('TaskWorker', TaskWorker);

    TaskWorker.$inject = ['$cookies', '$q', 'HttpService'];

    /**
     * @namespace TaskWorker
     * @returns {Factory}
     */

    function TaskWorker($cookies, $q, HttpService) {
        /**
         * @name TaskWorker
         * @desc The Factory to be returned
         */
        var TaskWorker = {
            attemptAllocateTask: attemptAllocateTask,
            getTaskWorker: getTaskWorker
        };

        return TaskWorker;

        function attemptAllocateTask(project_id) {
            var settings = {
                url: '/api/task-worker/',
                method: 'POST',
                data: {
                    project: project_id
                }
            };
            return HttpService.doRequest(settings);
        }

        function getTaskWorker(pk) {
            var settings = {
                url: '/api/task-worker/' + pk + '/retrieve-with-data/',
                method: 'GET'
            };
            return HttpService.doRequest(settings);
        }


    }
})();
