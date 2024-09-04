import React, { useRef, useState } from 'react';

import styles from '@/styles/signup.module.css'
import Email from '@/pages/components/common/email/Email';
import Password from '@/pages/components/common/password/Password';
import DialogDefault from '@/pages/components/common/dialog/Dialog';
import { Button } from '@material-tailwind/react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dialogRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let isEmailValid = emailRef.current.checkValidity();
    let isPassowrdValid = passwordRef.current.checkValidity()
    if ( isEmailValid && isPassowrdValid) {
      dialogRef.current.handleOpen();
    }

  };

  return (
    <main className="container">
      <div className="wrapper">
        <h1 className="title">Sign up</h1>
        <form  onSubmit={handleSubmit} className={"form"} noValidate>
          <Email email={email} setEmail={setEmail} ref={emailRef}/>
          <Password password={password} setPassword={setPassword} ref={passwordRef}/>
          <Button className={styles.signUpButton + ' m-auto'}  type={'submit'} >
            <span>Sign Up</span>
          </Button>
        </form>
      </div>
      <DialogDefault ref={dialogRef}/>
    </main>
  );
}
