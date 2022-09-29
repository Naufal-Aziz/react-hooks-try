import { useState } from 'react';
import './App.css';
import TitleList from './components/TitileList';

const App = () => {
  const [resourceName, setResourceName ] = useState('posts')


  return (
    <>
    <button onClick={() => {setResourceName('posts')}}>Posts</button>
    <button onClick={() => {setResourceName('todos')}}>Todos</button>
    <TitleList resourceName={resourceName} />
    </>
  );
}

export default App;
