import './App.css';
import { Menu } from './components/Menu/menu';
import { Presentation } from './sections/Presentation';
import { AboutMe } from './sections/Aboutme';
import { Works } from './sections/works';

function App() {
  return (
    <div className='App'>
      <Menu />
      <main>
        <Presentation />
        <AboutMe />
        <Works />
      </main>
    </div>
  );
}

export default App;
