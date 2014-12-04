/**
 * Created by thudoan on 12/3/14.
 */
(function(){
  var sportsStore=angular.module("sportsStore");
    sportsStore.controller("SportsStoreController",function(){
        this.categories=valsFromService.categories;
        this.products=valsFromService.products;

    });
})();



