import * as React from 'react';
import { Box } from './Box';
import * as styles from "./Button.css"

type Props = React.PropsWithChildren &
  styles.ButtonVariants & {
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  };

export const OwnButton: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <Box as="button" onClick={onClick} className={styles.button(rest)}>
      {children}
    </Box>
  );
};
