# zomock

GET https://zomock.herokuapp.com/restaurants

```
[
    {
        "_id": "60708f0d10679bae9f718f8f",
        "name": "Sridher Eateries",
        "rating": "3",
        "image": "https://i.ibb.co/ZTHr2cM/res-sample.jpg",
        "cost": "150",
        "numOfReviews": "3380",
        "discount": "80%",
        "spec": "Curd and rice",
        "area": "Indiranagar"
    },
    {
        "_id": "6073cb4d8bab295faebb5717",
        "name": "Nabhan Restaurant",
        "rating": "3",
        "image": "https://i.ibb.co/ZTHr2cM/res-sample.jpg",
        "cost": "150",
        "numOfReviews": "3380",
        "discount": "80%",
        "spec": "North Indian",
        "area": "Koramangala"
    },
    {
        "_id": "6073ccae8bab295faebb5718",
        "name": "Kiran Plaza",
        "rating": "5",
        "image": "https://i.ibb.co/ZTHr2cM/res-sample.jpg",
        "cost": "350",
        "numOfReviews": "4380",
        "discount": "40%",
        "spec": "Chinese",
        "area": "Koramangala"
    },
    {
        "_id": "6073cd2a8bab295faebb5719",
        "name": "ABC Restaurants Limited",
        "rating": "2",
        "image": "https://i.ibb.co/ZTHr2cM/res-sample.jpg",
        "cost": "450",
        "numOfReviews": "5678",
        "discount": "20%",
        "spec": "Thai",
        "area": "Koramangala"
    },
    {
        "_id": "6073cda38bab295faebb571a",
        "name": "Anas Foods",
        "rating": "5",
        "image": "https://i.ibb.co/ZTHr2cM/res-sample.jpg",
        "cost": "390",
        "numOfReviews": "5678",
        "discount": "20%",
        "spec": "Thai",
        "area": "Koramangala"
    },
    {
        "_id": "6073cdcf8bab295faebb571b",
        "name": "Mridula Fast Food and Bar",
        "rating": "5",
        "image": "https://i.ibb.co/ZTHr2cM/res-sample.jpg",
        "cost": "290",
        "numOfReviews": "5678",
        "discount": "20%",
        "spec": "Thai",
        "area": "Koramangala"
    },
    {
        "_id": "6073cfcf3c39394bf8de0073",
        "name": "Res-10",
        "image": "https://drive.google.com",
        "rating": "4",
        "cost": "150",
        "spec": "North Indian",
        "area": "Koramangala",
        "numOfReviews": "3340",
        "discount": "30%",
        "__v": 0
    }
]
```

Add restaurants - POST https://zomock.herokuapp.com/restaurants/add

Body - 

```
 {
        "_id": "6073ccae8bab295faebb5718",
        "name": "Kiran Plaza",
        "rating": "5",
        "image": "https://i.ibb.co/ZTHr2cM/res-sample.jpg",
        "cost": "350",
        "numOfReviews": "4380",
        "discount": "40%",
        "spec": "Chinese",
        "area": "Koramangala"
  }
```

Creator - [Dushyant Pathak](mailto:dushyant.pathak@crio-users.in)
