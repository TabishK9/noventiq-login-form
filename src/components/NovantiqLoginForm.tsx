import React, { useState, useContext } from 'react';
import { Container, Form, Button, InputGroup, FormControl, Row, Col} from 'react-bootstrap';
import { MailOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { UserNovantiqLoginPageDetails } from '../api/Context-Api.tsx';

const LoginForm = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const mainHandlers:any = useContext(UserNovantiqLoginPageDetails); 

  return (
        <>
            <Container className="mt-5 form-container" >
                    <Form onSubmit={mainHandlers.handleSubmitData}>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Row>
                                <Col xs="auto">
                                    <Form.Label>Email :</Form.Label>
                                </Col>
                                    <Col>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <MailOutlined />
                                            </InputGroup.Text>
                                            <FormControl
                                            type="email"
                                            placeholder="email@address.com"
                                            value={mainHandlers.userLoginDetails.email}
                                            onChange={mainHandlers.handleChange}
                                            name="email"
                                            required
                                            />
                                        </InputGroup>
                                    </Col>
                            </Row>
                    </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Row>
                                    <Col xs="auto">  <Form.Label>Password :  </Form.Label> </Col>
                                    <Col>
                                        <InputGroup>
                                                <InputGroup.Text>
                                                    <LockOutlined />
                                                </InputGroup.Text>
                                                <FormControl
                                                type={!isVisible?"password":"text"}
                                                placeholder="********"
                                                value={mainHandlers.userLoginDetails.password}
                                                onChange={mainHandlers.handleChange}
                                                required
                                                name="password"
                                                />
                                                <InputGroup.Text onClick={()=>setIsVisible(!isVisible)}>
                                                { !isVisible ? <EyeInvisibleOutlined /> : <EyeOutlined /> }
                                                </InputGroup.Text>
                                            </InputGroup>
                                    </Col>
                                </Row>
                                <Form.Text className="text-muted">
                                    <a href="https://noventiq.com/">Forgot password?</a>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formLanguage" className="mb-3">
                                <Row>
                                <Col  xs="auto"> <Form.Label>Language :</Form.Label> </Col>
                                    <Col>  
                                            <Form.Control
                                                as="select"
                                                value={mainHandlers.userLoginDetails.language}
                                                onChange={mainHandlers.handleChange}
                                                name="language"
                                            >
                                                <option value="en">English</option>
                                                <option value="hi">Hindi</option>
                                                <option value="fr">French</option>
                                                <option value="ja">Japanese</option>
                                            </Form.Control>
                                        </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formRememberMe" className="mb-3">
                              <Row>
                                <Col>
                                    <Form.Check
                                        type="switch"
                                        checked={mainHandlers.userLoginDetails.rememberMe}
                                        onChange={mainHandlers.handleChange}
                                        name="rememberMe"
                                    />
                                </Col>
                                <Col><Form.Label>Remember Me</Form.Label></Col>
                                </Row>
                            </Form.Group>
                            <br/>
                            <Button variant="dark" type="submit" className="w-40">
                            Log in
                            </Button>
                    </Form>
            </Container>
            
        </>

  );
};

export default LoginForm;