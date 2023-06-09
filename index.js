/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Calculadora from './src/Calculadora';

AppRegistry.registerComponent(appName, () => Calculadora);
