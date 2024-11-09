import "../styles/faqs.css"

const FAQs = () => {
  
  return (
    <section className='faq'>
      <h2>Preguntas frecuentes</h2>

      <details name='info' open>
        <summary>¿A que modalidades de entrenamiento puedo acceder?</summary>
        <ol>
          <li>Programas de entrenamiento presencial, semipresencial y virtual</li>
          <li>Planes de entrenamiento</li>
          <li>Planes de nutrición</li>
        </ol>
      </details>

      <details name='info'>
        <summary>¿Puedo entrenar si soy principiante? </summary>
        <p>¡Por supuesto! Nuestros programas están diseñados para adaptarse a cualquier nivel de experiencia. Comenzaremos con un plan adecuado para tu estado físico actual y progresaremos a medida que avances. </p>
      </details>

      <details name='info'>
        <summary>¿Cuánto tiempo tarda en verse resultados?</summary>
        <p>El tiempo para ver resultados depende de varios factores, como tu dedicación, consistencia y el tipo de objetivo que tienes. En general, muchos de nuestros clientes notan mejoras en su fuerza y condición física en 12 a 16 semanas con un plan constante. </p>
      </details>
      <p className='copy_right'>Copyright ©️ - Inception Team</p>
    </section> 
  );
};

export default FAQs;
