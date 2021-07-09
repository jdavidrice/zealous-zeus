import React from 'react';
import { Link, Typography } from '@material-ui/core';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link
          href='https://github.com/davidsaulrodriguez/zealous-zues'
          variant='h2'
          component='h1'>
          Zelous Zues
        </Link>
        <Typography variant='h3' component='h2'>
          Coming Soon!
        </Typography>
      </header>
    </div>
  );
};

export default App;
