import React, { useState } from 'react';
import "../styles/faqs.css"

const FAQs = () => {
  
  return (
    <section className='faq'>
      <h2>Preguntas frecuentes</h2>

      <details name='info' open>
        <summary>¿En cuanto tiempo puedo ver resultados?</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </details>

      <details name='info'>
        <summary>¿Es muy costoso realizar los cambios?</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </details>

      <details name='info'>
        <summary>¿Qué te diferencia del resto?</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </details>
      <p className='copy_right'>Copyright ©️ - Inception Team</p>
    </section> 
  );
};

export default FAQs;
