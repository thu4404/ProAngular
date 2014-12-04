/**
 * Created by thudoan on 12/3/14.
 */
(function(){
  var sportsStore=angular.module("sportsStore");

    sportsStore.controller("SportsStoreController",function(ProductsService, CategoriesService){
        this.categories=CategoriesService.query();
        this.products=ProductsService.query();

    });
})();



