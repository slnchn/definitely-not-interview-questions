import React, { useState } from 'react';

import AccordionArrow from 'assets/icons/accordion-arrow.svg';

function Accordion(props) {
  const { renderTitle, children } = props;

  const [contentVisible, setContentVisible] = useState(false);

  function toggleContentVisibility() {
    setContentVisible((prevContentVisible) => !prevContentVisible);
  }

  return (
    <div className="accordion">
      <div className="accordion-title-block">
        {renderTitle()}
        <button
          type="button"
          className={`accordion__button ${contentVisible ? '--opened' : ''}`}
          onClick={toggleContentVisibility}
        >
          <img src={AccordionArrow} alt="accordion arrow" />
        </button>
      </div>

      <div className={`accordion-content ${contentVisible ? '--visible' : ''}`}>{children}</div>
    </div>
  );
}

export default Accordion;
