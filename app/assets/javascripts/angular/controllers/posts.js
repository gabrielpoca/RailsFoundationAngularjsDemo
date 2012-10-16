function PostsCtrl($scope, $http) {
	$http.get('/posts.json').success(function(data) {
		$scope.posts = data;
		console.log(data);
	});
	$scope.removePost = function(post) {
		console.log(post);
		$("#post_"+post).fadeOut();
		$http.delete('/posts/'+post+'.json').success(function(data) {
			console.log("Success");
		})
	};
}
