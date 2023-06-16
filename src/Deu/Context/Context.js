import React, { useState } from 'react';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [sedentary, setSedentary] = useState(0);
  const [light, setLight] = useState(0);
  const [heavy, setHeavy] = useState(0);
  const [moderate, setModerate] = useState(0);
  const [athlete, setAthlete] = useState(0);
  const [bmrs, setBmrs] = useState(0);
  const [ibm,setIbm] = useState(0)
 

  // You can set initial values or default values for `amount` here

  return (
    <MyContext.Provider value={{ibm,setIbm,bmrs, setBmrs ,athlete, setAthlete, sedentary, setSedentary ,light, setLight,heavy, setHeavy,moderate, setModerate}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
