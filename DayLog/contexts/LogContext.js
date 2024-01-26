import React from 'react';
import {createContext, useState} from 'react';

const LogContext = createContext();

const LogContextProvider = ({children}) => {
  const [text, setText] = useState('');
  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContextProvider;
