/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './app/Redux';
import Tasks from './app/Components/Tasks';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <Tasks />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
