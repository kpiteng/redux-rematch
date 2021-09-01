/* eslint-disable import/no-unresolved */
import AsyncStorage from '@react-native-async-storage/async-storage';
import createRematchPersist from '@rematch/persist';
import { AllFilters } from '../Filters';


export const persistPlugin = createRematchPersist({
  key: 'root',
  whitelist: ['TaskList'],
  version: 2,
  storage: AsyncStorage,
  transforms: AllFilters,
});
