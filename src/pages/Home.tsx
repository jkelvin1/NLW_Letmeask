import { useHistory } from 'react-router-dom';

import illustration from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth} from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home(){
  const history = useHistory();
  const { user, singInWithGoogle} = useAuth()

  async function handleCreateRoom(){
    if (!user){
      await singInWithGoogle();
    }
    history.push('/rooms/new');
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>Crie salas de perguntas e respostas em tempo real.</strong>
        <p>Tire todas as dúvidas da sua audiência.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Letmeask"/>
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do Google"/>
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}