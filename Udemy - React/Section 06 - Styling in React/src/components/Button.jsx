import {styled} from 'styled-components'
// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;
//   margin:0.4rem;

//   &:hover{
//     background-color: #f0920e;
//   }
// `;
export default function Button({children,...props}){
  return (
    <button className='bg-yellow-400 font-semibold px-4 py-2 uppercase rounded-md hover:bg-orange-500 text-blue -700 m-3' {...props}>{children}</button>
  )
}