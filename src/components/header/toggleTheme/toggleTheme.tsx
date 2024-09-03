'use client'

import React, { ChangeEvent } from 'react';
import toggle from './toggleTheme.module.scss';
import { Icon } from '@iconify/react';

interface ToggleThemeProps {
  className?: string; // Accept a className prop
}

const handleToggle = (e: ChangeEvent<HTMLInputElement>): void => {
  const $el = e.target as HTMLInputElement;
  
  if ($el.checked) {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
};

const ToggleTheme: React.FC<ToggleThemeProps> = ({ className }) => {
  return (
    <label className={`${toggle.toggle} ${className || ''}`}>
      <input onChange={(e) => handleToggle(e)} id="theme" type="checkbox" className={`${toggle.input} theme`} />
      <div className={toggle.wrapper}>
        <div className={toggle.icon}>
          <Icon icon="eva:moon-fill" />
        </div>
        <div className={toggle.icon}>
          <Icon icon="eva:sun-fill" />
        </div>
      </div>
    </label>
  );
}

export default ToggleTheme;