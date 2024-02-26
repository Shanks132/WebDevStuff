import "./Header.css"   
import reactImg from '../assets/react-core-concepts.png';

const compliments = ['Essential', 'Crucial', 'Important', 'Fundamental', 'Core']
export function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {compliments[Math.floor(Math.random() * 4)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  
}