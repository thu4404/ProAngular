/**
 * Created by thu4404 on 12/4/14.
 */
//These services
(
    function(){
        //Get the sportsStore module so we can add services to it
        var sportsStore=angular.module("sportsStore");

        sportsStore.factory("ProductsService",function($resource){
            return $resource("common/js/sportsStoreProducts.json");
        });

        sportsStore.factory("CategoriesService",function($resource){
            return $resource("common/js/sportsStoreCategories.json");
        });
    }

)();
