
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/index';
import sunburst from 'react-syntax-highlighter/src/styles/sunburst';

import classes from './help.scss';

const Help = () => {
    return (
      <div className={classes.help}>
        <li className={classes.noPkg}>
          <h1 className={classes.noPkgTitle}>
            No Package Published Yet
          </h1>
          <p>
            <div>
              To publish your first package just:
            </div>
            <br/>
            <strong>
              1. Login
            </strong>
            <SyntaxHighlighter language='javascript' style={sunburst}>
              {`npm adduser --registry  ${location.origin}`}
            </SyntaxHighlighter>
            <strong>2. Publish</strong>
            <SyntaxHighlighter language='javascript' style={sunburst}>
              {`npm publish --registry ${location.origin}`}
            </SyntaxHighlighter>
            <strong>3. Refresh this page!</strong>
          </p>
        </li>
      </div>
    );
};

export default Help;
