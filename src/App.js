import Game from './components/Game';
import './scss/App.scss';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='title'> Tic-Tac-Toe</h1>
      <Game />
      <footer className='footer'>© 2023. Ruslan Anatolevich</footer>
    </div>
  );
}

export default App;
