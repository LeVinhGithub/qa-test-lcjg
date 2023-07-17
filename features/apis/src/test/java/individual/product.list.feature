@product.list
Feature: Application Service - Applications - Get Application By ID

    Background:
        

    Scenario: <testType> - <testName>
        Given url domainUrl
        And path "products.json"
        When method get
        
        Then assert responseStatus == 200
        
        * def expectedSchema =
        """
            {
                id: "#number",
                categories: "#[] #string",
                name: "#string",
                image: "#string",
                inStock: "#boolean",
                price: "#number",
            }
        """
        Then match each response == expectedSchema

        * def checkArrayNoDuplicationFunc = 
        """
            function(response){
                let hasNoDuplicateItem = true
                for (const item of response) {
                    let arr = item.categories;
                    const hasNoDuplicates = arr.length === new Set(arr).size;
                    if(!hasNoDuplicates) {
                        karate.log("Item with id ", item.id, " is invalid product with cate ", arr)
                        hasNoDuplicateItem = false
                    } 
                }
                
                return hasNoDuplicateItem;
            }
        """
        Then match checkArrayNoDuplicationFunc(response) == true