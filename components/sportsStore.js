/**
 * Created by thudoan on 12/3/14.
 */
var valsFromService={};
angular.module("sportsStore",[]);

valsFromService.categories=[{"category":"Chess"}, {"category":"Soccer"}, {"category":"Watersports"}];//[];
valsFromService.products=[{"id":"05af70919155f8fc","name":"Kayak","description":"A boat for one person","category":"Watersports","price":275}, {"id":"3d31d81b218c98ef","name":"Lifejacket","description":"Protective and fashionable","category":"Watersports","price":48.95}, {"id":"437615faf1d38815","name":"Soccer Ball","description":"FIFA-approved size and weight","category":"Soccer","price":19.5}, {"id":"93c9cc08ac2f28d4","name":"Corner Flags","description":"Give your playing field a professional touch","category":"Soccer","price":34.95}, {"id":"ad4e64b38baa088f","name":"Stadium","description":"Flat-packed 35,000-seat stadium","category":"Soccer","price":79500.00}, {"id":"b9e8e55c1ecc0b63","name":"Thinking Cap","description":"Improve your brain efficiency by 75%","category":"Chess","price":16}, {"id":"32c2355f9a617bbd","name":"Unsteady Chair","description":"Secretly give your opponent a disadvantage","category":"Chess","price":29.95}, {"id":"5241512218f73a26","name":"Human Chess Board","description":"A fun game for the family","category":"Chess","price":75}, {"id":"59166228d70f8858","name":"Bling-Bling King","description":"Gold-plated, diamond-studded King","category":"Chess","price":1200}];//[];

/*
sportsStore.run(function ($http){
    $http.get("common/js/sportsStoreProducts.json").
        success(function(data, status, headers, config){
            valsFromService.products=data.products;
            valsFromService.categories=data.categories;
        }).
        error(function(data, status, headers, config){
            var blah=data;
        });
});
*/
