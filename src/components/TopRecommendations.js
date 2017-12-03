import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import {
  List,
  ListItem,
  Button,
  Text,
  Card,
} from 'react-native-elements';

import recommendationsActions from '../redux/actions/recommendationItems';

class TopRecommendations extends Component {
  constructor(props) {
    super(props)
    this.props.setRecommendationsState()
    this.props.getRecommendationsByCategory('3944', 8000000)
  }

  render() {
    return (
      <Card
        title="Recommendation item for you to have"
      >
        <List containerStyle={{ marginBottom: 20 }}>
          {this.props.recommendations.length > 0 &&
          this.props.recommendations.map((recommendation) => {
            return (
              <ListItem
                key={ recommendation.thumbnail }
                avatar={ { uri: recommendation.thumbnail } }
                title={ recommendation.name }
                subtitle={ `Rp. ${recommendation.price}` }
              />
            );
          })}
          <ListItem
            avatar={{ uri: 'https://static1.squarespace.com/static/5678e71ec647ad2a4bc8f1fb/t/58d0e2fb9f745633ea2d79ee/1490084607878/' }}
            title="Kawaskieu Ninja"
            subtitle="Rp. 19.000.000"
          />

          <ListItem
            avatar={{ uri: 'http://downloadpony.com/wp-content/uploads/2016/07/WinRAR-Free-Download.png' }}
            title="Winrar Premium"
            subtitle="Rp. 200.000"
          />

          <ListItem
            avatar={{ uri: 'http://downloadpony.com/wp-content/uploads/2016/07/WinRAR-Free-Download.png' }}
            title="Winrar Premium"
            subtitle="Rp. 200.000"
          />
        </List>
        <Button
          title="More recommendation"
          backgroundColor="#e3871fff"
        />
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    recommendations: state.recommendationItems,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setRecommendationsState: () => {
      dispatch(recommendationsActions.setRecommendationsState())
    },
    getRecommendationsByCategory: (category_id, price) => {
      const payload = {
        category_id,
        price,
      }
      dispatch(recommendationsActions.getRecommendationsByCategory(payload))
    }
  }
}

// export default TopRecommendations;
export default connect(mapStateToProps, mapDispatchToProps)(TopRecommendations);
