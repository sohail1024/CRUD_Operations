'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
      'myApp.Welcome_Page',
        'myApp.view1',


  'myApp.view2',
    'myApp.Welcome_Page',

  'myApp.view3',
  'myApp.view4',
    'myApp.view5',
        'myApp.view6',
        'myApp.establishment',
                'myApp.transport',
                'myApp.studyMaterial',
                                'myApp.manageOffice',
                    'myApp.dormitories',
                                        'myApp.studentslistrequest',
                   'myApp.subject',
                                      'myApp.addsubject',
                           'myApp.editsubject',
                                                      'myApp.editteacher',

                           'myApp.teacher',
                                                      'myApp.addteacher',
                           'myApp.onlineexams',








  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Welcome_Page'});
}]);
