import { useState, useRef } from 'react';
import BoxColor from './BoxColor';

const MyForm = () => {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const handleChange = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
      <div className='container'>
        {colors.map((color, index) => (
        <BoxColor key={index} color={color} inputValue={inputValue} />
      ))}
      </div>
      
    </div>
  );
};

export default MyForm;