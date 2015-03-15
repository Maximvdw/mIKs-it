  module.controller('PostController', function($scope, $http) {
  	$scope.fetchPosts = function() {
  		$http({
  			method: 'GET',
  			url: 'http://srv5.mvdw-software.com/workspace/MIKs-it-Backend/html/PostAPI.php?action=get&userid=1'
  		}).
  		success(function(data, status) {
  			var posts = {
  				items: []
  			};
  			$.each(data['posts'], function(postId, postData) {
  				posts.items.push({
  					message: postData['message']
  				});
  			});
  			$scope.items = posts.items;
  		}).
  		error(function(data, status) {
  			$scope.data = data || "Request failed";
  			$scope.status = status;
  		});
  	}

  	$scope.fetchPosts();
  });

  function addPost() {
  	var message = document.getElementById('inputMessage').value;
  	$.ajax({
  		url: 'http://srv5.mvdw-software.com/workspace/MIKs-it-Backend/html/PostAPI.php?action=add&userid=1&message=' + message,
  		success: (function(data, status) {
  			modalNewPost.hide();
  		}),
  	});
  }