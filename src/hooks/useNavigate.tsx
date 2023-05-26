import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../interfaces/global';

const useNavigate = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return navigation;
};

export default useNavigate;
