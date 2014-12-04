/**
 * Created by thu4404 on 12/4/14.
 */
var catsFilterApp=angular.module("customFilter",[]);

(
    function(){
        catsFilterApp.filter("categoryFilter",function(){
            return (
                function(products, propName) {
                    var tempCats = {};
                    var retVal = [];
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
