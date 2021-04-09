# zomock

GET https://zomock.herokuapp.com/restaurants

```
[
    {
        "_id": "60708f0d10679bae9f718f8f",
        "name": "ABC",
        "rating": "3",
        "cost": "150",
        "spec": "North Indian",
        "area": "Koramangala"
    },
    {
        "_id": "60709409e9f9db6e4461b739",
        "name": "DEF",
        "rating": "4",
        "cost": "150",
        "spec": "North Indian",
        "area": "Koramangala",
        "__v": 0
    },
    {
        "_id": "607097ae10679bae9f718f90",
        "name": "Alpha Res",
        "rating": "2",
        "cost": "120",
        "spec": "South Indian",
        "area": "Airport Road"
    },
    {
        "_id": "607097e110679bae9f718f91",
        "name": "Beta Res",
        "rating": "5",
        "cost": "130",
        "spec": "South Indian, Chinese",
        "area": "Mangalore"
    },
    {
        "_id": "6070b192666c800022b63e1a",
        "name": "Res-9",
        "rating": "4",
        "cost": "150",
        "spec": "North Indian",
        "area": "Koramangala",
        "__v": 0
    }
]
```

Add restaurants - POST https://zomock.herokuapp.com/restaurants/add

Body - 

```
 {
        "name": "Res-9",
        "rating": "4",
        "cost": "150",
        "spec": "North Indian",
        "area": "Koramangala"
 }
```

Creator - [Dushyant Pathak](mailto:dushyant.pathak@crio-users.in)
