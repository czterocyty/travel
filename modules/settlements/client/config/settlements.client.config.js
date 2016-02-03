(function () {
    'use strict';

    angular
        .module('settlements')
        .run(menuConfig);

    menuConfig.$inject = ['Menus'];

    function menuConfig(Menus) {
        Menus.addMenuItem('topbar', {
            title: 'Settlements',
            state: 'settlements',
            type: 'dropdown',
            roles: ['*']
        });

        // Add the dropdown list item
        Menus.addSubMenuItem('topbar', 'settlements', {
            title: 'Your Settlements',
            state: 'settlements.list'
        });

        // Add the dropdown create item
        Menus.addSubMenuItem('topbar', 'settlements', {
            title: 'Create Settlement',
            state: 'settlements.create',
            roles: ['user']
        });
    }
})();
