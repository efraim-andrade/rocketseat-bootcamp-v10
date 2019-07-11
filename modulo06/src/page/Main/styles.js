import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  padding-bottom: 20px;
  border-color: #eee;
  border-bottom-width: 1px;

  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 40px;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid #eee;

  flex: 1;

  background-color: #eee;
`;

export const SubmitButton = styled(RectButton)`
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  background: #7159c1;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  margin: 0 20px 30px;

  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;

  background: #eee;
`;

export const Name = styled.Text`
  margin-top: 4px;

  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 5px;

  color: #999;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  height: 36px;
  margin-top: 10px;
  border-radius: 4px;

  align-self: stretch;
  align-items: center;
  justify-content: center;

  background: #7159c1;
`;

export const ProfileText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
