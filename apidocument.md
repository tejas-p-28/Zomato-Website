Page 1
List of city
> http://localhost:6701/location
> 
List of restaurants 
> http://localhost:6701/restaurants
> 
restaurants wrt to city 
> ttp://localhost:6701/restaurants?state_id=4
> 
quick search data  
> http://localhost:6700/mealType
> 

(http://localhost:6700/restaurants?state_id=4&meal_id=5)
Page 2
restaurants wrt to quickSearch 
> http://localhost:6700/restaurants?meal_id=5
> 


filter
> cuisine filter
  data respect to cuisine and quickSearch 
  > http://localhost:6700/filter/3?cuisine=4
  > 
> cost filter
  > http://localhost:6700/filter/1?lcost=200&hcost=500
  > 
 data respect to cuisine and cost 
> cuisine filter + cost filter 
  > http://localhost:6700/filter/1?lcost=200&hcost=500&cuisineId=1

> sort
    sort low to high in same quickSearch
    http://localhost:6700/filter/1?cuisineId=1&sort=1
    sort high to low in same quickSearch
    http://localhost:6700/filter/1?cuisineId=1&sort=-1

> pagination
   > http://localhost:6700/filter/1?cuisineId=1&skip=2&limit=2


Page 3
> restaurants details
> http://localhost:6700/details/2

> Menu of that restaurants
> http://localhost:6700/menu/2


page 4
> menu items on user selection
  > localhost:6700/menuItem
  > body [1,4,5]

> api to place order
  > localhost:6700/placeOrder

page 5
> list all order
  > http://localhost:6700/orders
  > http://localhost:6700/orders?email="aakash@gmail.com"

Delete order 
> localhost:6700/deleteOrder
 

 update order
 > localhost:6700/updateOrder/61ffab62c39f96bf7ba39676?status=Success