/**
 * Created by thu4404 on 12/4/14.
 */
//The filter is in its on module called customFilter
var catsFilterApp=angular.module("customFilter",[]);

(
    function(){
        catsFilterApp.filter("categoryFilter",function(){
            return (
                //We expect the products which is an array like:
                //[{"id":"05af70919155f8fc","name":"Kayak","description":"A boat for one person","category":"Watersports","price":275}, ...]
                function(products, propName) {
                    var tempCats = {};
                    var retVal = [];
                    //We only process if we get an array that has something in it
                    if (angular.isArray(products) && products.length>0 && angular.isString(propName)){
                        angular.forEach(products, function (aProd) {
                            var categoryName = aProd[propName];
                            if (!(categoryName in tempCats)) {
                                retVal.push(aProd);
                                //Add the categoryName to the object
                                tempCats[categoryName] = categoryName;
                            }
                        });
                        return retVal;
                    }
                }
            );
        });
    }
)();
