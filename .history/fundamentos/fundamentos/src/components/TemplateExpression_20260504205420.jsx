//! TemplateExpression 

const TemplateExpression = () => {
  const name = "Vitoria";
  const data = {
    age: 26,
    job: "Programadora"
  }

  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Bem vinda, {name}</h3>
      <p>Sua idade é {age}</p>
    </div>
  );
};

export default TemplateExpression;
