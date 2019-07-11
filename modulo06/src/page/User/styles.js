import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-color: #eee;
  border-bottom-width: 1px;

  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;

  background: #eee;
`;

export const Name = styled.Text`
  margin-top: 10px;

  color: #333;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text`
  margin-top: 5px;

  color: #999;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Starred = styled(RectButton)`
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;

  background: #f5f5f5;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;

  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLiner: 1,
})`
  color: #333;
  font-size: 15px;
  font-weight: bold;
`;

export const Author = styled.Text`
  margin-top: 2px;

  color: #666;
  font-size: 13px;
`;
