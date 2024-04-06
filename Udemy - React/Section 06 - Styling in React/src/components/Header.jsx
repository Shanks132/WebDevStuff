import logo from '../assets/logo.png';
// import classes from'./header.module.css'


import {styled} from 'styled-components'

// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   & img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//   }
  
//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: 'Pacifico', cursive;
//     margin: 0;
//   }

//   & p{
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }

//   @media (min-width: 768px) {
   
//     margin-bottom: 4rem;
    
  
//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `


export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className='mb-8 w-20 h-20 object-contain' />
      <h1 className='text-2xl font-semibold lg:text-amber-800 sm:text-gray-700 tracking-widest text-center uppercase font-title'>ReactArt</h1>
      <p  className='text-slate-500 md:mb-14'
      // className={classes.paragraph} 
      style={
        {color:'red',textAlign:'center',} //inline styles in react 
        }>A community of artists and art-lovers.</p>
    </header>
  );
}
 
 