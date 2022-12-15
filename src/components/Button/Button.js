import React from 'react';
import '../Button/Button.sass';

const Button = (props) => {
  const { width, height, backgroundColor,color, borderRadius , onClick , children } = props;
  
  const styles = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color:color,
    borderRadius: borderRadius,
    onClick: onClick,
    marginTop:10,
    marginBottom:10
  };

  return (
    <button className='button' onClick={onClick} style={styles}>
      {children}
    </button>
  );
}

export default Button;