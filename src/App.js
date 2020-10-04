import React, { useEffect } from 'react';
import './App.css';
import DocumentList from './components/documentList';
import initialLayout from './data/layout.json'
import initialData from './data/data.json'
import { useDispatch } from 'react-redux';
import { getData, getLayout } from './redux/actions/documentInfo';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLayout(initialLayout))
    dispatch(getData(initialData))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Welcome to BizzStream Document App
      </header>
      <main className="App-main">
        <DocumentList />
      </main>
    </div>
  );
}

export default App;
