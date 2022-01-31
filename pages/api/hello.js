// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PlaceData from '../../src/placeData.json'

export default function handler(req, res) {

  // console.log("MY KEY ", process.env.MY_KEY);

  const request = req.body
  console.log(request);

  const { lat, lon, area, price } = request.query
  // console.log('hReques', request.query);

  console.log(' hLat', lat);
  console.log('hLon', lon);
  console.log('harea', area);
  console.log('hp', price);


  // console.log(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lon}&radius=${area === "" ? 1500 : area}&type=restaurant&keyword=restaurant&k`);

  // fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lon}&radius=${area === "" ? 1500 : area}&type=restaurant&keyword=restaurant&key=${process.env.MY_KEY}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     return res.status(200).json(data)
  //   })
  //   .catch(e => res.statue(404).send(e))


  const newData = JSON.parse(JSON.stringify(PlaceData))


  // const myData = JSON.parse(PlaceData)





  // Check for operational status
  const allWorkingRestaurants = newData.filter(place => place.business_status === "OPERATIONAL")
  // filter the highest ranking
  const highestRatedRestaurants = allWorkingRestaurants.sort((a, b) => {
    if (a.rating > b.rating)
      return -1;
    if (a.rating < b.rating)
      return 1;
    return 0;
  })

  // Filter out resturant without Price level
  const restaurantsWithPriceLvL = highestRatedRestaurants.filter(place => place.hasOwnProperty("price_level"))

  // console.log("Before one pig", restaurantsWithPriceLvL);



  // price_level ==>   0 free , 1 Inexpensive, 2 Moderate,  3 Expensive , 4 Very Expensive


  // check if user has price range & sort in order



  restaurantsWithPriceLvL.sort((a, b) => {
    if (a.price_level > b.price_level)
      return -1;
    if (a.price_level < b.price_level)
      return 1;
    return 0;
  })


  // One Pig Star
  const onePigRestaurants = restaurantsWithPriceLvL.filter(foodPrice => foodPrice.price_level <= 1)

  //  Two Pig Start
  const twoPigRestaurants = restaurantsWithPriceLvL.filter(foodPrice => foodPrice.price_level === 2)// || foodPrice.price_level >= 2


  //  Three Pig Start
  const threePigRestaurants = restaurantsWithPriceLvL.filter(foodPrice => foodPrice.price_level >= 3)
  // console.log("three", threePigRestaurants);




  switch (price) {
    case "":
      console.log('run price empty ===>', price);

      return res.status(200).json(JSON.stringify(onePigRestaurants))
      break;

    case "0":
      console.log('run price 0 ===>', price);

      return res.status(200).json(JSON.stringify(onePigRestaurants))
      break;
    case "1":
      console.log('run price 1  ===>', price);

      return res.status(200).json(JSON.stringify(twoPigRestaurants))
    case "2":
      console.log('run price 2 ===>', price);

      return res.status(200).json(JSON.stringify(threePigRestaurants))


    default:
      console.log('run price  default ===>', price);

      return res.status(200).json(JSON.stringify(twoPigRestaurants))
      break;
  }



  // res.status(200).json(newData)
}

