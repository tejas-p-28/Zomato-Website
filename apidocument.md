Page 1
List of city
> http://localhost:6701/location
> 
List of restaurants 
> http://localhost:6701/restaurants
> 
restaurants wrt to city 
> http://localhost:6701/restaurants?state_id=4
> 
quick search data  
> http://localhost:6701/mealtype
> 

not required ( http://localhost:6701/restaurants?state_id=4&meal_id=6 )    
Page 2
restaurants wrt to quickSearch 
> http://localhost:6701/restaurants?meal_id=5


filter
> cuisine filter
  data respect to cuisine and quickSearch 
  > http://localhost:6701/filter/3?cuisine=4
  > 
> cost filter
  > http://localhost:6701/filter/1?lcost=200&hcost=500
  > 
 data respect to cuisine and cost 
> cuisine filter + cost filter 
  > http://localhost:6701/filter/1?lcost=200&hcost=500&cuisineId=2
  > 
> sort
    sort low to high in same quickSearch
        > http://localhost:6701/filter/1?lcost=200&hcost=500&cuisineId=2&sort=1
    sort high to low in same quickSearch
        > http://localhost:6701/filter/1?lcost=200&hcost=500&cuisineId=2&sort=-1
    

> pagination
   >


Page 3
> restaurants details
>

> Menu of that restaurants
>


page 4
> menu items on user selection
  > localhost:6701/menuItem
  > body [1,4,5]

> api to place order
  > localhost:6701/placeOrder

page 5
> list all order
  > 

Delete order 
> 
 

update order
 > 