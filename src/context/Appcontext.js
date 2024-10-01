import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext('');

const AppContextProvider = (props) => {
  const [Data, setData] = useState(() => {
    const savedData = localStorage.getItem('burgerData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [user, setUser] = useState(() => {
    const savedData = localStorage.getItem('currentUser');
    return savedData ? JSON.parse(savedData) : null});

  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  // Sign up function
  const signUp = (username, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    const userExists = existingUsers.some(user => user.username === username);
    
    if (userExists) {
      setErrorMessage('User already exists!');
        return false;
    }
    
    // Add new user
    const newUser = { username, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    navigate('/')
    return true;
};


const logIn = (username, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    

    const user = existingUsers.find(user => user.username === username && user.password === password);
    
    if (user) {
        setUser(user); 
        setErrorMessage('');
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/')
        return true;
    } else {
      setErrorMessage('Invalid credentials!');
        return false;
    }
};

const logOut = () => {
    setUser(null); 
};



  const handleFoodType = (value) => {
    console.log(value);

    fetch('/data/AllBurger.json')
      .then((response) => response.json())
      .then((data) => {
        let filteredData;
        if (value === 'VEG') {
          filteredData = data.filter((item) => item.category === 'veg');
        } else if (value === 'NON_VEG') {
          filteredData = data.filter((item) => item.category === 'non-veg');
        } else {
          filteredData = data;
        }

        setData(filteredData);
        localStorage.setItem('burgerData', JSON.stringify(filteredData)); // Save to localStorage
        navigate('/burger');
      })
      .catch((error) => console.log(error));
  };



  const value = {
    handleFoodType,
    Data,
    user, 
    signUp, 
    logIn, 
    logOut,
    errorMessage
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
