import { MongoClient } from "mongodb";
export async function handler(req,res){
  if(req.method === "POST" ){
    console.log(req)
    try{
      // mongodb+srv://kannanshankar130203:Shankar%4013@restapicluster.cbsm0tq.mongodb.net/
      const data = req.body;
      console.log(data);

      
      const {title, image, description, address} = data;
      const client = await MongoClient.connect("mongodb+srv://kannanshankar130203:Shankar%4013@restapicluster.cbsm0tq.mongodb.net/")
      const db = await client.db()
      
      const meetupCollections =await db.collection('meetups');
      
      const result = await meetupCollections.insertOne(data);
      client.close()
      
      res.status(201).json({message:'meetup inserted'});
    }
    catch(error){
      res.status(500).json({message:error})
    }

  }
} 