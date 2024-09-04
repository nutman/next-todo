import React, { forwardRef, useImperativeHandle, useState } from 'react';

import styles from '@/styles/signup.module.css';
import { isEmailValid } from '@/pages/utils/validation';

const Email = forwardRef(function Email({email, setEmail}, ref) {

  const [touched, setTouched] = useState(false)
  const [valid, setValid] = useState(true)

  const update =(e) => {
    e.preventDefault();
    e.stopPropagation();

    setEmail(e.target.value)
  }

  useImperativeHandle(ref, () => ({
    checkValidity: checkValidity,
  }));

  const checkValidity = () =>{
    setTouched(true);
    let isValid = isEmailValid(email)
    setValid(isValid);
    return isValid;
  }

  return (
    <input
      className={styles.input + ' border ' + (touched ? !valid ?'bg-red-50 border-red-500' : 'bg-green-50 border-green-500' : 'bg-white border-gray-500 border-opacity-20') }
      type="email"
      placeholder="Email"
      value={email}
      onChange={update}
    />
  );
});

export default Email;
