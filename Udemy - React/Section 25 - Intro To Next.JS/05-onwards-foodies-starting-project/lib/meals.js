import sql from "better-sqlite3"
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';
const db = sql('meals.db');
const s3 = new S3({
  region: 'ap-south-1'
});

export function getMeals(){
  // throw new Error("Loading Meals Failed");
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug){
  return db.prepare('SELECT * FROM meals where slug = ?').get(slug);
}
export async function saveMeal(meal){
  meal.slug = slugify(meal.title,{lower:true});
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer(); 
  // stream.write(Buffer.from(bufferedImage), (error)=>{
  //   if(error){
  //     throw new Error('image saving failed');
  //   }
  // });
  // meal.image = `/images/${fileName}`;
  s3.putObject({
    Bucket: 'nextjs-sample-image-bucket',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
  meal.image = fileName;
  db.prepare(`
    INSERT INTO meals (title,summary,instructions,creator,creator_email,image,slug)
    VALUES (@title,@summary,@instructions,@creator,@creator_email,@image,@slug)`).run(meal);
}