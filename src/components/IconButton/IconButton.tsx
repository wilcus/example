import * as React from 'react';
import * as styles from './IconButton.module.css';

export interface IconButtonProps {
  text: string;
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button>
      <div className={styles.deleteme}>{props.text}</div>
    </button>
  );
};

export default IconButton;
