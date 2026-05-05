//! TemplateExpression 

const TemplateExpression = () => {
  const name = "Vitoria";
  const data = {
    age: 26
  }

  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Bem vinda, {name}</h3>
    </div>
  );
};

export default TemplateExpression;
