'use strict';

import {
    render
} from 'react-dom';

const App = () =>
      <div>
        <h1>Build Successful!</h1>
        <p>This file is located under /Client/scripts/</p>
      </div>

render(
  <App />,
  document.getElementById( 'react-mount-point' )
);
