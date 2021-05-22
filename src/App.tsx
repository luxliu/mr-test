import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Shopping from './pages/shopping';
import Cart from './pages/cart';

import rootReducer from './redux';

import { configureStore } from './redux/utils';

import 'antd/dist/antd.css';

const store = configureStore({ rootReducer });

function App() {
  return (
    <ReduxProvider store={store}>
      <Cart />
      <Shopping />
    </ReduxProvider>
  );
}

export default App;
