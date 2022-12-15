import React from 'react';
import AppleSvg from '../../assets/apple.svg'


const Apple = (props) => {
  const { className} = props;
  
  const styles = {
    className: className,
  };

  return (
    <img className={styles.className}   src={AppleSvg}
    alt="apple"
    width={'14%'}
/>
  );
}

export default Apple;