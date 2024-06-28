import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img draggable="true" src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  );
}
