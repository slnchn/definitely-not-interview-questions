import React from 'react';

function ReactHooksPage() {
  return (
    <div className="page react-hooks-page">
      <h2 className="page__title"> React Hooks Page</h2>

      <p className="page__summary"> Some info about React hooks.</p>

      <div className="page-chapter">
        <h3 id="react-usage-motivation" className="page-chapter__title">
          Why do we need <code className="code-highlight">React Hooks</code> at all?
        </h3>

        <p className="page-chapter__description">
          <strong>Arguments in favor of hooks:</strong>
          <ul>
            <li>It&apos;s less abstract and difficult then HOCs;</li>
            <li>You can use state in functional components;</li>
            <li>It provides more simple Context API;</li>
            <li>Hooks are declarative;</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default ReactHooksPage;
