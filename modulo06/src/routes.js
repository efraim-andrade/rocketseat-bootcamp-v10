import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './page/Main';
import User from './page/User';
import StarredRepo from './page/StarredRepo';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      StarredRepo,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
