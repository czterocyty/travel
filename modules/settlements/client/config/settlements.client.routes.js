(function () {
    'use strict';

    angular
        .module('settlements.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider
            .state('settlements', {
                abstract: true,
                url: '/settlements',
                template: '<ui-view/>'
            })
            .state('settlements.list', {
                url: '',
                templateUrl: 'modules/settlements/client/views/list-settlements.client.view.html'
                //controller: 'ArticlesListController',
                //controllerAs: 'vm'
            })
            .state('settlements.create', {
                url: '/create',
                templateUrl: 'modules/settlements/client/views/form-settlement.client.view.html',
                //controller: 'ArticlesController',
                //controllerAs: 'vm',
                //resolve: {
                //    articleResolve: newArticle
                //},
                data: {
                    roles: ['user', 'admin']
                }
            });
            //.state('articles.edit', {
            //    url: '/:articleId/edit',
            //    templateUrl: 'modules/articles/client/views/form-article.client.view.html',
            //    controller: 'ArticlesController',
            //    controllerAs: 'vm',
            //    resolve: {
            //        articleResolve: getArticle
            //    },
            //    data: {
            //        roles: ['user', 'admin']
            //    }
            //})
            //.state('articles.view', {
            //    url: '/:articleId',
            //    templateUrl: 'modules/articles/client/views/view-article.client.view.html',
            //    controller: 'ArticlesController',
            //    controllerAs: 'vm',
            //    resolve: {
            //        articleResolve: getArticle
            //    }
            //});
    }

    //getArticle.$inject = ['$stateParams', 'ArticlesService'];
    //
    //function getArticle($stateParams, ArticlesService) {
    //    return ArticlesService.get({
    //        articleId: $stateParams.articleId
    //    }).$promise;
    //}
    //
    //newArticle.$inject = ['ArticlesService'];
    //
    //function newArticle(ArticlesService) {
    //    return new ArticlesService();
    //}
})();

