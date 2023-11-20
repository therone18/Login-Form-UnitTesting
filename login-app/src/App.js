// App.js
import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <TextInput label="Username" value={username} onChange={handleUsernameChange} />
      <TextInput label="Password" value={password} onChange={handlePasswordChange} />
      <Button text="Login" disabled={username === '' || password === ''} onClick={handleButtonClick} />
    </div>
  );
};

export default App;