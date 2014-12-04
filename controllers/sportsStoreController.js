/**
 * Created by thudoan on 12/3/14.
 */
(function(){
  //Reference the sportsStore module and set it to the local sportsStore variable
  var sportsStore=angular.module("sportsStore");

    //Create the SportsStoreController and pass in the ProductsService and CategoriesService
    sportsStore.controller("SportsStoreController",function(ProductsService, CategoriesService){
        this.categories=CategoriesService.query();
        this.products=ProductsService.query();

    });
})();



