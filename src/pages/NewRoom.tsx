import {FormEvent, useState} from 'react';
import {Link, useHistory} from 'react-router-dom'; 

import illustration from '../assets/images/illustration.svg';

import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom(){
  const {user} = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent){
    event.preventDefault();

    if(newRoom.trim() === ''){
      return;
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })
    
    history.push(`/rooms/${firebaseRoom.key}`);
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
          <img id="user-avatar" src={user?.avatar} alt="Foto de perfil do usuário"/>
          <p>{user?.name}</p>
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
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