import React from 'react';
import CV from '../../assets/ChristianResume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
       i-download mo
      </a>
      <a href="#contact" className="btn btn-primary">
       mag usap tayo
      </a>
    </div>
  );
};

export default CTA;
