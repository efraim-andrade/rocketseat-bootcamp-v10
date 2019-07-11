import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron
    // .configure({ host: '192.168.15.18' }) // Casa
    .configure({ host: '192.168.1.27' }) // iClouds
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
