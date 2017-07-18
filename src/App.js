import React from 'react';
import classNames from 'classnames/bind';

import './assets/css/styles.scss';
import styles from './App.local.scss';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className="container">
      <form>
        Name:
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
