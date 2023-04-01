import React from 'react';
import ComponentDidMount from './components/ComponentDidMount';
import FirstFetch from './fetch Api/FirstFetch';

function App() {
  return (
    <div className='container' style={{ textAlign: "center", marginTop: "1rem" }}>
      <ComponentDidMount /><hr />
      <FirstFetch />
    </div>
  );
}

export default App;
