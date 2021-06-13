import React from 'react';

function ReactBasicsPage() {
  return (
    <div className="page react-basics-page">
      <h2 className="page__title">React Basics Page</h2>

      <p className="page__summary">Here some basic React stuff.</p>

      <div className="page-chapter">
        <h3 id="react-usage-motivation" className="page-chapter__title">
          Why do we need <code className="code-highlight">React</code> at all?
        </h3>

        <p className="page-chapter__description">
          <p>
            Today, a very large number of services are used through a browser -{' '}
            <strong>YouTube</strong>, <strong>GitHub</strong>, <strong>Skype</strong>.
          </p>

          <p>
            The interface of modern applications should be smarter and more responsive (dynamically
            changing depending on user actions). To perform it in the browser you need to update
            DOM.
          </p>

          <p>
            <strong>But it&apos;s not OK because:</strong>
            <ul>
              <li>Changing the DOM directly is slow (reflow, repainting);</li>
              <li>
                When we change the DOM with pure JS, it is imperative and more difficult to work
                with than declarative;
              </li>
            </ul>
          </p>

          <p>
            <strong>React solves these problems:</strong>
            <ul>
              <li>React minimizes DOM updates under the hood (VirtualDOM);</li>
              <li>React uses declarative approach;</li>
            </ul>
          </p>
        </p>
      </div>
    </div>
  );
}

export default ReactBasicsPage;
