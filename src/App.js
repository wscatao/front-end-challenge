import React from 'react';
import { getLastPosts } from './data/Data';

function App() {
  const teste = getLastPosts();
  teste.then(({headers}) => console.log(headers));
  return (
    <div>
     Hello world
    </div>
  );
}

export default App;
