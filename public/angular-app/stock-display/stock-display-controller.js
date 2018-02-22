angular.module('meannasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, $window, stockDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    // vm.title= 'MEAN Nasdaq App';
    var id = $routeParams.id;
    stockDataFactory.stockDisplay(id).then(function(response) {
         console.log(response);
        vm.stock = response.data;
    });


vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };


vm.addReview = function() {
    var token = jwtHelper.decodeToken($window.sessionStorage.token);
    var username = token.username;
    
    var postData = {
        // name: username,
        comment: vm.comment
    };
    if (vm.commentForm.$valid) {
        stockDataFactory.postComment(id, postData).then(function(response) {
            console.log(response.status);
            if(response.status === 201) {
                $route.reload();
            }
        }).catch(function(error) {
            console.log(error);
        });
    } else {
        vm.isSubmitted = true;
    }    
  };
}