/**
 * Created by Goreev on 17.12.2015.
 */

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {
        $scope.test="Hello world!";
        $scope.posts = posts.posts;
        $scope.addPost = function() {
            if (!$scope.title || $scope.title==='') { return; }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
                comments: [
                    {author: "Joe", body: "Good post!", upvotes: 0},
                    {author: "Billy", body: "How are you?", upvotes: 0}
                ]
            });
            $scope.title='';
            $scope.link='';
        };
        $scope.incrementUpvotesCount = incrementUpvotes;
    }
]);

app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts) {
        $scope.post = posts.posts[$stateParams.id]
        $scope.incrementUpvotesCount = incrementUpvotes;
        $scope.addComment = function() {
            if ($scope.body === '') {return;}
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body='';
        }
    }
]);

var incrementUpvotes = function(item) {
    item.upvotes++;
};