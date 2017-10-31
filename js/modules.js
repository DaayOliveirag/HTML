var MyContactList = angular.module("contactListModule", ['ngRoute']); 
	
MyContactList.config(function($routeProvider, $locationProvider){
	
	$routeProvider
		.when('/contacts', {
			templateUrl: 'contactList.html', 
			controller: 'contactList'
		})
		.when('/contacts/:id', {
			templateUrl: 'contactDetails.html', 
			controller: 'contactList'
		})
		
		.otherwise({
			redirectTo: '/contacts'
		});
		
});
