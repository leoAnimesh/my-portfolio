import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> { }

const Divider: FC<DividerProps> = (props) => {
  return <hr className={twMerge('border-t dark:border-borderDark ', props.className)} {...props} />;
};

export default Divider;
