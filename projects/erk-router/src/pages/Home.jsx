import {navigate} from '../Link'
import { Link } from '../Link';
export default function HomePage() {
  return (
    <>
      <h1>home</h1>
      <p>esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <button onClick={()=>navigate('/about')}>Ir a Sobre nosotros</button>
      <Link to="/about">Ir a home</Link>
    </>
  );
}