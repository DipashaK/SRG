import React, { useState } from "react";
import * as Components from "../components/Components";
import axios from 'axios';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext';

function LoginPage() {
  const [signIn, toggle] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || (!signIn && !name)) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const url = signIn ? 'http://localhost:3005/login' : 'http://localhost:3005/signup';
      const payload = signIn ? { email, password } : { name, email, password };
      const response = await axios.post(url, payload);

      if (signIn) {
        // Handle sign-in response
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);

        // Debugging: log the token
        console.log(localStorage.getItem('token'));

        // Redirect to home page
        navigate('/'); 
        alert('Successfully Signed In');
      } else {
        // Handle sign-up response
        if (response.status === 409) {
          setModalMessage('User already exists. Please use a different email.');
          setShowModal(true);
        } else {
          alert('Successfully Signed Up');
          toggle(true); // Switch to Sign-In view after successful sign-up
        }
      }
    } catch (err) {
      console.error('Error during authentication:', err);

      if (err.response) {
        setError(err.response.data.message || 'An error occurred during the process.');
      } else if (err.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError('Failed to send the request. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          {!signIn && (
            <Components.Input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          )}
          <Components.Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Components.Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <p className="error">{error}</p>}
          <Components.Button type="submit" disabled={loading}>
            {loading ? (signIn ? 'Signing in...' : 'Signing up...') : (signIn ? 'Sign In' : 'Sign Up')}
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Components.Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          {error && <p className="error">{error}</p>}
          <Components.Button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start your journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
      
      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
    </Components.Container>
  );
}

export default LoginPage;
