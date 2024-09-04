import React, { forwardRef, useImperativeHandle, useState } from 'react';

import styles from '@/styles/signup.module.css';

const Password = forwardRef(function Password({password, setPassword}, ref) {

  const [hasEightCharactersAndHasNoSpaces, setHasEightCharactersAndHasNoSpaces] = useState(false);
  const [hasUppercaseAndLowercase, setHasUppercaseAndLowercase] = useState(false);
  const [hasDigit, setHasDigit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [touched, setTouched] = useState(false)
  const [valid, setValid] = useState(true)

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const update =(e) => {
    e.preventDefault();
    e.stopPropagation();

    setPassword(e.target.value)
  }

  useImperativeHandle(ref, () => ({
    checkValidity: checkValidity,
  }));

  const checkValidity = () =>{
    setTouched(true);
    let isValid = validatePassword(password);
    setValid(isValid);

    return isValid;
  }

  const validatePassword = (value) => {
    const hasEightCharactersAndHasNoSpaces = value.length >= 8 && value.length <= 64 && !/\s/.test(value);
    const hasUppercaseAndLowercase = /[A-Z]/.test(value) && /[a-z]/.test(value);
    const hasDigit = /\d/.test(value);

    if (!hasEightCharactersAndHasNoSpaces) {
      setHasEightCharactersAndHasNoSpaces(true)
      // return "Password must be 8 characters or more. Password must not contain spaces.";
    } else {
      setHasEightCharactersAndHasNoSpaces(false)
    }

    if (!hasUppercaseAndLowercase) {
      setHasUppercaseAndLowercase(true)
      // return "Password must contain both uppercase and lowercase letters.";
    } else {
      setHasUppercaseAndLowercase(false)

    }
    if (!hasDigit) {
      setHasDigit(true)
    } else {
      setHasDigit(false)
    }

    return hasEightCharactersAndHasNoSpaces && hasUppercaseAndLowercase && hasDigit;
  };

  return (
    <>
      <input
        className={styles.input + ' border ' + (touched ? !valid ?'bg-red-50 border-red-500' : 'bg-green-50 border-green-500' : 'bg-white border-gray-500 border-opacity-20') }
        type={showPassword ? 'text' : 'password'}
        placeholder="Create your password"
        value={password}
        onChange={update}
      />
      <span className={styles.passwordToggle} onClick={handlePasswordToggle}>
            {showPassword ?
              <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path className="hs-password-active" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path className="hs-password-active:block"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path className="hs-password-active:block"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line className="hs-password-active:block" x1="2" x2="22" y1="2" y2="22"></line>
              </svg>:
              <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path className="hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle className="hs-password-active:block" cx="12" cy="12" r="3"></circle>
              </svg>}

          </span>
      <div className={styles.passwordRequirements}>
        <p className={touched ? hasEightCharactersAndHasNoSpaces ? 'text-red-600/100': 'text-green-600/100' : ''}>8 characters or more (no spaces)</p>
        <p className={touched ? hasUppercaseAndLowercase ? 'text-red-600/100': 'text-green-600/100' : ''}>Uppercase and lowercase letters</p>
        <p className={touched ? hasDigit ? 'text-red-600/100': 'text-green-600/100' : ''}>At least one digit</p>
      </div>
    </>
  );
});

export default Password;
