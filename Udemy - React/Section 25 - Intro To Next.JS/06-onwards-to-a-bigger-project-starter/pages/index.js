
import MeetupList from '../components/meetups/MeetupList'

const image = "https://imgs.search.brave.com/MPlMOG7xDFswFtB-CJPuN3yx2UhD8DhOt5hQ5NuaqUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTMvNGMvNWMvMTYv/a2ltaS1uby1uYS13/YS1zdGFpcnMuanBn"
const dummy_meetups = [
  { 'id': 'm1' , title: 'a first meetup', image:image, address:'Some address 1', description:"1st meetup"},
  { 'id': 'm2' , title: 'a 2nd meetup', image:image, address:'Some address 2', description:"2nd meetup"}
]
export default function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups}/>
    </>
  )

}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;  //use for changing data frequetly and stuff for request and all 
//   return{
//       props:{meetups:dummy_meetups}
//     }
// }
export async function getStaticProps(context){
  return {
    props:{
      meetups:dummy_meetups
    },
    revalidate:30
  }
}