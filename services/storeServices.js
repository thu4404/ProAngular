/**
 * Created by thu4404 on 12/4/14.
 */

(
    function(){
        var sportsStore=angular.module("sportsStore");

        sportsStore.factory("ProductsService",function($resource){
            return $resource("common/js/sportsStoreProducts.json");
        });

        sportsStore.factory("CategoriesService",function($resource){
            return $resource("common/js/sportsStoreCategories.json");
        });
    }

)();
