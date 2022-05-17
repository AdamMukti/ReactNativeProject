import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './src/pages/Homepage';
import Mahasiswa from './src/pages/Mahasiswa';
import DetailMahasiswa from './src/pages/DetailMahasiswa';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Mahasiswa" component={Mahasiswa} />
        <Stack.Screen name="DetailMahasiswa" component={DetailMahasiswa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
