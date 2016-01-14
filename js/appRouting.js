(function () {

    angular.module('petStoreApp', ['shoppingCart', 'customFilters', 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
				.state('petstore', {
                    url: '/',
                    views: {
                        'petstoreContent@': {
                            templateUrl: '/views/productList.html',
                            controller: 'petStoreCtrl',
                            controllerAs: 'petStore'
                        }
                    }
                })
                .state('checkout', {
                    url: '/checkout',
                    views: {
                        'petstoreContent@': {
                            templateUrl: '/views/checkoutSummary.html'
                        }
                    }
                })
                .state('placeorder', {
                    url: '/placeorder',
                    views: {
                        'petstoreContent@': {
                            templateUrl: '/views/placeOrder.html'
                        }
                    }
                })
                .state('complete', {
                    url: '/complete',
                    views: {
                        'petstoreContent@': {
                            templateUrl: '/views/thankYou.html'
                        }
                    }
                });
        });

})();