import React from 'react';

export const Button: React.FC<{onClick: () => void, info: string}> = (props) => {
  return (
    <button {...props}>{props.info}</button>
  )
}
