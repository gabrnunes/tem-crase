import React from 'react';
import Image from 'next/image';
import useDarkMode from 'use-dark-mode';
import clsx from 'clsx';

import styles from './styles.module.css';

const DarkModeToggle = () => {
  const { disable, enable, value } = useDarkMode();

  return (
    <>
      <button
        className={clsx(styles.button, !value && styles.active)}
        type="button"
        onClick={disable}
      >
        <Image
          src="/sun.png"
          width={16}
          height={16}
          alt="Ativar o modo claro"
        />
      </button>
      <button
        className={clsx(styles.button, value && styles.active)}
        type="button"
        onClick={enable}
      >
        <Image
          src="/moon.png"
          width={16}
          height={16}
          alt="Ativar o modo noturno"
        />
      </button>
    </>
  );
};

export default DarkModeToggle;
