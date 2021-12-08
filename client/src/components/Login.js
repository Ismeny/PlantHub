// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
//
// import Auth from '../utils/auth';
//
// const Login = (props) => {
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login, { error, data }] = useMutation(LOGIN_USER);
//
//     // update state based on form input changes
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//
//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };
//
//     // submit form
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formState);
//         try {
//             const { data } = await login({
//                 variables: { ...formState },
//             });
//
//             Auth.login(data.login.token);
//         } catch (e) {
//             console.error(e);
//         }
//
//         // clear form values
//         setFormState({
//             email: '',
//             password: '',
//         });
//     };
//
//     return (
//         <main className="flex-row justify-center mb-4">
//             <div className="col-12 col-lg-10">
//                 <div className="card">
//                     <h4 className="card-header bg-dark text-light p-2">Login</h4>
//                     <div className="card-body">
//                         {data ? (
//                             <p>
//                                 Success! You may now head{' '}
//                                 <Link to="/">back to the homepage.</Link>
//                             </p>
//                         ) : (
//                             <form onSubmit={handleFormSubmit}>
//                                 <input
//                                     className="form-input"
//                                     placeholder="Your email"
//                                     name="email"
//                                     type="email"
//                                     value={formState.email}
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     className="form-input"
//                                     placeholder="******"
//                                     name="password"
//                                     type="password"
//                                     value={formState.password}
//                                     onChange={handleChange}
//                                 />
//                                 <button
//                                     className="btn btn-block btn-primary"
//                                     style={{ cursor: 'pointer' }}
//                                     type="submit"
//                                 >
//                                     Submit
//                                 </button>
//                             </form>
//                         )}
//
//                         {error && (
//                             <div className="my-3 p-3 bg-danger text-white">
//                                 {error.message}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };
//
// export default Login;

import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
// import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = ({ handleSignUp, handleLoginModal }) => {
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error, data }] = useMutation(LOGIN_USER);
      
        // update state based on form input changes
        const handleChange = (event) => {
          const { name, value } = event.target;
      
          setFormState({
            ...formState,
            [name]: value,
          });
        };
      
        // submit form
        const handleFormSubmit = async (event) => {
          event.preventDefault();
          console.log(formState);
          try {
            const { data } = await login({
              variables: { ...formState },
            });
      
            Auth.login(data.login.token);
          } catch (e) {
            console.error(e);
          }
      
          // clear form values
          setFormState({
            email: '',
            password: '',
          });
        };
  return (
    <Grid
      textAlign="center"
      style={{ height: "10vh", paddingTop: "200px" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="./images/favicon.ico" /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            <Button color="teal" fluid size="large" onClick={handleFormSubmit}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?{" "}
          <div
            onClick={() => {
              // alert('yumy');
              handleLoginModal();
              handleSignUp();
            }}
          >
            Sign Up
          </div>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
