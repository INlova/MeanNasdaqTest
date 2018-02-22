angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http) {
    return {
        stockList: stockList,
        stockDisplay: stockDisplay,
        postComment, postComment
    };
    
    function stockList() {
        return $http.get('/api/stocks?count=15').then(complete).catch(failed);
    }
    function stockDisplay(id) {
        return $http.get('/api/stocks/' + id).then(complete).catch(failed);
    }
    
    function postComment(id, comment) {
        return $http.post('/api/stocks/' + id + '/comments', comment).then(complete).catch(failed);
    }
    
    function complete(response) {
        return response;
    }
    
    function failed(error) {
        console.log(error.statusText);
    }
}