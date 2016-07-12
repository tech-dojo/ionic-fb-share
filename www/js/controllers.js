angular.module('starter.controllers', [])

.controller('facebookPostSharing', function($scope) {
  $scope.image = 'http://1.bp.blogspot.com/-whONj2eVaPM/TkLEIoj1hxI/AAAAAAAAEQo/ZyE2gApEe3k/s1600/gmc.png';
  $scope.postName = 'This is an example post name';
  $scope.caption = 'This is an example caption';
  $scope.description = 'This is an example description';

  console.log(appId.id);
  $scope.shareToFacebookUsingFeedDialog = function(image,postName, caption, description) {

    console.log('Inside shareToFacebookUsingFeedDialog Function');
    console.log(image);
    console.log(postName);
    console.log(caption);
    console.log(description);

    var url = "https://www.facebook.com/dialog/feed?app_id="+appId.id+"&name="+postName+"&display=popup&caption="+caption+"&description="+description+"&link="+image+"&redirect_uri=http://facebook.com&picture="+image;
    window.open(url, '_blank');
  }
})