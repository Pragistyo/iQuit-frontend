import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  FlatList
} from 'react-native';

import WantToBuy from '../components/WtbListItem';

class Wtb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' },
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' },
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' },
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' },
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' },
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' },
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' },
      { name: 'Sceptre 55" Class 4K (2160P) LED TV (U550CV-U)',
        price: 4327544,
        thumbnail: 'https://i5.walmartimages.com/asr/d8277794-068f-4be1-be8d-4cf7c831f58d_1.f0ee6dfdf3785d9f080c577edb9d18e4.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF' }
      ]
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <WantToBuy item={item}/>}
          />
      </View>
    );
  }
}

export default Wtb;
