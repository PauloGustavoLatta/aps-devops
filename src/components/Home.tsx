import React, { FunctionComponent } from 'react';

export const Home: FunctionComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        background: '#6C7A89',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p> Texto simples e inicial. </p>
    </div>
  );
}