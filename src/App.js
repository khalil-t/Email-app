import logo from './logo.svg';
import './App.css';
import React, { useRef , useState  } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const [feedbackMessage1, setFeedbackMessage1] = useState('');
  const [feedbackMessage2, setFeedbackMessage2] = useState('');
  const [feedbackMessage3, setFeedbackMessage3] = useState('');
  const click = () => {
    setFeedbackMessage1 ('')
    setFeedbackMessage2 ('')
    setFeedbackMessage3 ('')


  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vm0b4jv', 'template_31du4kd', form.current, {
        publicKey: '7uLuNhvRf_h_iZGiD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
          click()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        },
      );
  };
  return (
    
      <header className="App-header">
        
      <form ref={form} onSubmit={sendEmail}>
        <h1 className='title'>submit</h1>
      <input type="text" name="user_name" placeholder='Your Name ' value={feedbackMessage1} onChange={(e)=>{setFeedbackMessage1(e.target.value)}}/>
      <input type="email" name="user_email" placeholder='Your Email' value={feedbackMessage2} onChange={(e)=>{setFeedbackMessage2(e.target.value)}}/>
      <textarea name="message" placeholder='Your Text' className='textarea' value={feedbackMessage3} onChange={(e)=>{setFeedbackMessage3(e.target.value)}}/>
      <input type="submit" value="Send"  className='button' onClick={click}/>
    </form>
      </header>
   
  );
}

export default App;
