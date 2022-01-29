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
  res.status(200).json(newData)
}

