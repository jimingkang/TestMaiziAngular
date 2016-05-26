(function (commonModule, $, resources) {
    'use strict';

    commonModule.service("itemService", ['$http', function ($http) {
       /* console.log(resources);
        console.log($);*/
            this.getItems = function() {
                $http.get("items.json").success(function(resp){
                    console.log(resp);
                 return   resp.items;
                });
            /*  return  [
                    {title: 'andy', quantity: 8, price: 3.95},
                    {title: 'Dots', quantity: 17, price: 12.95},
                    {title: 'Pebbels', quantity: 5, price: 6.95}
                ];*/
            };

        }]);

}(window.commonModule, window.$, window.resources));
