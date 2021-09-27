import {Link} from 'react-router-dom'; 

import illustration from '../assets/images/illustration.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom(){
  const {user} = useAuth();

  return(
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>Crie salas de perguntas e respostas em tempo real.</strong>
        <p>Tire todas as dúvidas da sua audiência.</p>
      </aside>
      <main>
        <div className="main-content">
          <img id="user-avatar" src={user?.avatar} alt="Foto de perfil do usuário"/>
          <p>{user?.name}</p>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Deseja entrar em uma sala existente? <Link to="/">Clique aqui!</Link>
          </p>
        </div>
      </main>
    </div>
  )
}