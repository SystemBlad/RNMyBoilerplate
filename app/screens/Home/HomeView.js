// @flow
import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import { Button } from '../../components';

type Props = {
  loggedUser: Object,
  requestGetProducts: Function,
  products: Object,
  isLoadingProducts: boolean,
};

function HomeView(props: Props) {
  const _keyExtractor = (item) => (item.productId ? item.productId.toString() : '');
  return (
    <View style={styles.contentContainer}>
      <Button
        mode="outlined"
        loading={props.isLoadingProducts}
        onPress={() => {
          props.requestGetProducts();
        }}
        icon="add-a-photo"
      >
        Press me. To reload products
      </Button>
      <FlatList
        data={props.products}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imageUrl }} />
            <Card.Title
              title={item.productName}
              subtitle={item.price}
              left={(propsI: any) => <Avatar.Icon {...propsI} icon="folder" />}
            />
            <Card.Content>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

export default HomeView;
