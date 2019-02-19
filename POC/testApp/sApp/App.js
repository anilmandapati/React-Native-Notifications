import React from 'react';
import { pushNotifications } from './src/services';
import AppContainer from './src/AppContainer';

pushNotifications.configure();

export default AppContainer;