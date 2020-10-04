import React from 'react';
import './App.css';
import DocumentList from './components/documentList';
import { useSelector } from 'react-redux';

function App() {

  const storeDocumentInfo = useSelector(state => state.documentInfo)

  return (
    <div className="App">
      <header className="App-header">
        Welcome to BizzStream Document App
      </header>
      <main className="App-main">
        <DocumentList documentInfo={storeDocumentInfo} />
      </main>
    </div>
  );
}

export default App;
