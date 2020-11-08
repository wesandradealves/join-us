import React, { InputHTMLAttributes, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import {
  Form,
  Title,
  Container,
} from './Newsletter.styles';

interface INewsletter extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export const Newsletter: React.FC<INewsletter> = ({ title }) => {
  const [emailErr, setEmailErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [form, setForm] = useState({
    email: '',
    name: ''
  });

	const handleSubmit = (
		e: React.ChangeEvent<unknown>
	) => {
    e.preventDefault();
    console.log(form);
  };  
  
	const handleValidation = (e:any) => {
	if(e.target) {
	    if(e.target.name === 'email') {
	      setEmailErr(!e.target.value ? '' : (!e.target.checkValidity()) ? 'Email inválido' : '');
	    } else {
	      setNameErr(!e.target.value ? '' : (!e.target.checkValidity()) ? 'Nome inválido' : '');
	    }    

	    setForm({
	      ...form,
	      [e.target.name]: e.target.value
	    }); 
	}
  };    
    
  return (
    <Container className="newsletter">
      {title && (
        <Title>{title}</Title>
      )}
      <Form onSubmit={(e) => handleSubmit(e)} noValidate>
        <TextField 
          name="name"
          classes={{
            root: (nameErr) ? 'err' : ''
          }}
          helperText={(nameErr) ? nameErr : ''} 
          onChange={e => handleValidation(e)}         
          required 
          placeholder="Nome" 
          inputProps={{ pattern: "^[a-zA-Z ]+$" }}
          label="Nome" />
        <TextField 
          classes={{
            root: (emailErr) ? 'err' : ''
          }}
          name="email"
          type="email"
          helperText={(emailErr) ? emailErr : ''}
          onChange={e => handleValidation(e)} 
          required 
          placeholder="E-mail"
          label="E-mail" />
          <Button disabled={form.email === '' && form.name === ''} onClick={e => handleSubmit(e)} >Enviar</Button>
      </Form>      
    </Container>
  );
};
