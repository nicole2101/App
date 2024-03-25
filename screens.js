import { Text, View } from 'react-native';

function dummyScreen(screenName) {
  return function (props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{screenName}</Text>
      </View>
    );
  };
}

const Login = dummyScreen('Login');
const ClientSignup = dummyScreen('ClientSignup');
const TrainerSignup = dummyScreen('TrainerSignup');
const Welcome = dummyScreen('Welcome');
const Who = dummyScreen('Who');
const HomeScreen = dummyScreen('HomeScreen');
const Profiles = dummyScreen('Profiles');
const MapView = dummyScreen('MapView');

export {
  Login,
  ClientSignup,
  TrainerSignup,
  Welcome,
  Who,
  HomeScreen,
  Profiles,
  MapView,
};
