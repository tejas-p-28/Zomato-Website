Page 1
List of city
> http://localhost:6701/location
> https://zomatotejas.herokuapp.com/location

List of restaurants 
> http://localhost:6701/restaurants
> https://zomatotejas.herokuapp.com/restaurants

restaurants wrt to city 
> http://localhost:6701/restaurants?state_id=4
> https://zomatotejas.herokuapp.com/restaurants?state_id=4

quick search data  
> http://localhost:6701/mealtype
> https://zomatotejas.herokuapp.com/mealType

not required ( http://localhost:6701/restaurants?state_id=4&meal_id=6 )  
             ( https://zomatotejas.herokuapp.com/restaurants?state_id=4&meal_id=6 )  
Page 2
restaurants wrt to quickSearch 
> http://localhost:6701/restaurants?meal_id=5
> https://zomatotejas.herokuapp.com/restaurants?meal_id=5

filter
> cuisine filter
  data respect to cuisine and quickSearch 
  > http://localhost:6701/filter/3?cuisine=4
  > https://zomatotejas.herokuapp.com/filter/3?cuisine=4

> cost filter
  > http://localhost:6701/filter/1?lcost=200&hcost=500
  > https://zomatotejas.herokuapp.com/filter/1?lcost=200&hcost=500

> data respect to cuisine and cost 
  > cuisine filter + cost filter 
    > http://localhost:6701/filter/1?lcost=200&hcost=500&cuisineId=2
    > https://zomatotejas.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=2
  > sort
    > sort low to high in same quickSearch
        > http://localhost:6701/filter/1?lcost=200&hcost=500&cuisineId=2&sort=1
        > https://zomatotejas.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=2&sort=1
    > sort high to low in same quickSearch
        > http://localhost:6701/filter/1?lcost=200&hcost=500&cuisineId=2&sort=-1
        > https://zomatotejas.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=2&sort=-1

> pagination
  > http://localhost:6701/filter/1?cuisineId=1&skip=2&limit=2
  > https://zomatotejas.herokuapp.com/filter/1?cuisineId=1&skip=2&limit=2


Page 3
> restaurants details
  > http://localhost:6701/details/2
  > https://zomatotejas.herokuapp.com/details/2

> Menu of that restaurants
  > http://localhost:6701/menu/2
  > https://zomatotejas.herokuapp.com/menu/2


page 4
> menu items on user selection
  > localhost:6701/menuItem
  > https://zomatotejas.herokuapp.com/menuItem
  > body [1,4,5]

> api to place order
  > localhost:6701/placeOrder
  > https://zomatotejas.herokuapp.com/placeOrder

page 5
> list all order
  > http://localhost:6701/orders
  > https://zomatotejas.herokuapp.com/orders

Delete order 
> localhost:6701/deleteOrder
 

update order
 > localhost:6700/updateOrder/61ffab62c39f96bf7ba39676?status=Success