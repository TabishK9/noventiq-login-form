import React, {useState, useEffect} from 'react';
import logo from './images/noventiqLogo.png';
import './App.css';
import {Card, CardFooter, Image, Container} from 'react-bootstrap';
import LoginForm from './components/NovantiqLoginForm.tsx';
import { UserNovantiqLoginPageDetails } from './api/Context-Api.tsx';
import { supportedNovantiqLanguages } from './constants.tsx';
import { validateEmailAddress } from './actions/emailValidation.tsx'

const MainApp = () => {

  const [userLoginDetails, setUserLoginDetails] = useState({
      email:"",
      password:"",
      language:"",
      rememberMe:false

  });

  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2);
    if (supportedNovantiqLanguages.includes(browserLanguage)) {
      setUserLoginDetails(prevState => ({...prevState, language:browserLanguage}));
    } else {
      setUserLoginDetails(prevState => ({...prevState, language:"en"}));
    }
  }, [setUserLoginDetails]);

  const handleChange = (event) => {
        const name = event.target.name;
        const value = name === "rememberMe" ? event.target.checked : event.target.value;
        setUserLoginDetails( prevState => ({...prevState, [name]:value}) )

  }

  const handleSubmitData = (event)=>{

    event.preventDefault();
    
    const isEmaildAddressvalid = validateEmailAddress(userLoginDetails.email);

    if(isEmaildAddressvalid === true){
      console.log("userLoginDetails data to be sent in post api for further authentication->",userLoginDetails);
    } else {
        console.log("email address not valid error->",isEmaildAddressvalid)
    }
    
  }

  return (
    <UserNovantiqLoginPageDetails.Provider value={{ handleSubmitData, handleChange, userLoginDetails }}>
      <div className="App">
        <Card className="card-background">
          <Card.Body>
            <Container fluid>
              <Image src={logo} fluid alt="Noventiq-Logo" />
            </Container>
            <LoginForm />
          </Card.Body>
          <CardFooter>
            <b>Copyright 2024 Noventiq | Powered by Noventiq</b>
          </CardFooter>
        </Card>
      </div>
    </UserNovantiqLoginPageDetails.Provider>
  );
}

export default MainApp;
