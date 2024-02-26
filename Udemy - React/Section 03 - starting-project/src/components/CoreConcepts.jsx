// export function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt="..." />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

//destructuring the prop variable into 3 standalone variables 
//can also use the syntax used above  
export function CoreConcepts({title,description,image}) {
    return (
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  
}