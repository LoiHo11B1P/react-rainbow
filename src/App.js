import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {

  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'yellow', 'orange', 'red'])

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  let colorMap = colors.map((color, i ) => {
    return <ColorBlock key={i} color={color}></ColorBlock>
  })

  return (
    <div className="App">
      <div className='color-display-main'>
        { colorMap }
        <ColorForm addColor={addColor}></ColorForm>
      </div>
    </div>
  );
}

export default App;
