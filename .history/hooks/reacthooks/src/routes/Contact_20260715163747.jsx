import React from "react";


const Contact = () => {
  const { counter } = useCounterContext();
   const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color:color}}>Página de contato</h1>
      <p>Valor do counter:{counter}</p>
    </div>
  );
};

export default Contact;
