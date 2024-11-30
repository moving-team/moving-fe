import React, { useState } from 'react';
import style from './AuthInput.module.css';
import eyeClose from '../../assets/icons/ic_eye_close.svg';
import eyeOpen from '../../assets/icons/ic_eye_open.svg';

type NomalInputType = {
  title: string;
  placeholder: string;
  value: string;
  type?: string;
  name: string;
  inputHeandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation: boolean;
  errorMessage: string;
};

export const NomalInputComponent = ({
  title,
  placeholder,
  value,
  type = 'text',
  name,
  inputHeandler,
  validation,
  errorMessage,
}: NomalInputType) => {
  return (
    <div className={style.container}>
      <span className={style.text}>{title}</span>
      <input
        className={`${style.input} ${
          style[value && validation ? 'complete' : '']
        } ${style[value && !validation ? 'invalid' : '']} `}
        value={value ?? ''}
        placeholder={placeholder}
        onChange={inputHeandler}
        type={type}
        id={name}
        name={name}
      />
      {validation ? null : (
        <span className={style.invaild}>{errorMessage}</span>
      )}
    </div>
  );
};

export const InvisibleInputComponent = ({
  title,
  placeholder,
  value,
  type = 'text',
  name,
  inputHeandler,
  validation,
  errorMessage,
}: NomalInputType) => {
  const [invisible, setInvisible] = useState<boolean>(true);

  return (
    <div className={style.container}>
      <span className={style.text}>{title}</span>
      <div className={style.inputContainer}>
        <input
          value={value ?? ''}
          onChange={inputHeandler}
          className={`${style.input} ${
            style[value && validation ? 'complete' : '']
          } ${style[value && !validation ? 'invalid' : '']} `}
          type={invisible ? 'password' : type}
          id={name}
          name={name}
          placeholder={placeholder}
        />
        <div className={style.iconPill}>
          {invisible ? (
            <img
              onClick={() => {
                setInvisible((prev) => !prev);
              }}
              src={eyeClose}
              alt=''
            />
          ) : (
            <img
              onClick={() => {
                setInvisible((prev) => !prev);
              }}
              src={eyeOpen}
              alt=''
            />
          )}
        </div>
      </div>
      {validation ? null : (
        <span className={style.invaild}>{errorMessage}</span>
      )}
    </div>
  );
};