
import MeetupDetail from "../../components/meetups/MeetupDetail"

const image = "https://imgs.search.brave.com/MPlMOG7xDFswFtB-CJPuN3yx2UhD8DhOt5hQ5NuaqUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTMvNGMvNWMvMTYv/a2ltaS1uby1uYS13/YS1zdGFpcnMuanBn"
export default function MeetupDetailsPage() {
  return (
    <MeetupDetail
      image={image}
      title={"First Meetup"}
      address={"dubai kuruku sand"}
      description={"Meeting meeting"}
      
    />
  )
}
export async function getStaticPaths() {
  return{
    fallback:false,
    paths:[
    {
      params:{
        meetupId:'m1'
      },
    },
    {
      params:{
        meetupId:'m2'
      },
    }
    ]
  }
}
export async function getStaticProps(context){
  //fetch single meetup data
  const meetupId = context.params.meetupId;
  console.log(meetupId)
  return {
    props:{
      image:{image},
      id:meetupId,
      title:"First Meetup",
      address:"dubai kuruku sand",
      description:"Meeting meeting"
    }
  }
}
