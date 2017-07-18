import React from 'react';
import classNames from 'classnames/bind';

import SimpleForm from './SimpleForm';

import './assets/css/styles.scss';
import styles from './App.local.scss';

const cx = classNames.bind(styles);

function App() {
  return <SimpleForm />;
}

export default App;
