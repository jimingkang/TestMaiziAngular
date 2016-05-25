(function (commonModule, $, resources) {
    'use strict';

    commonModule.service("itemService", ['$log', '$injector', function ($log, $injector) {
            this.getItems = function() {
              return  [
                    {title: 'Pots', quantity: 8, price: 3.95},
                    {title: 'Dots', quantity: 17, price: 12.95},
                    {title: 'Pebbels', quantity: 5, price: 6.95}
                ];
            };

        }]);

}(window.commonModule, window.$, window.resources));
