MyContactList.controller('contactList', function($scope, $http, $routeParams, $filter) {
    $http.get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json').
        then(function(response) {
            $scope.contactDetails = response.data;
			
			
			 $scope.index = $routeParams.id;
             $scope.currentContact = $scope.contactDetails[$scope.index];
			 
			 $scope.ind = $routeParams.id;
			
			 $scope.favoriteArray = [];
			 $scope.NotfavoriteArray = [];
			
			var j = 0;
			
			for (var i = 0; i < $scope.contactDetails.length; i++)
			{
				if ($scope.contactDetails[i].isFavorite){
					$scope.favoriteArray.push($scope.contactDetails[i]);
				} else
				if (!$scope.contactDetails[i].isFavorite){
					$scope.NotfavoriteArray.push($scope.contactDetails[j]);
					j++;
				}
			
			}
					
        });
			
		
});




 

