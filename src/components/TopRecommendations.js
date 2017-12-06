import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Linking,
  TouchableOpacity
} from 'react-native';
import {
  List,
  ListItem,
  Button,
  Text,
  Card,
} from 'react-native-elements';

import interestToCatId from '../helpers/interestToCatId';
import recommendationsActions from '../redux/actions/recommendationItems';
import thousandSeperator from '../helpers/thousandSeparator';

class TopRecommendations extends Component {
  constructor(props) {
    super(props)

    this.props.setRecommendationsState()

    this.fetchRecommendation = this.fetchRecommendation.bind(this)
    this.fetchRecommendation()
  }

  fetchRecommendation() {
    if (this.props.interests) {
      const randomCategoryFromUser = Math.ceil( Math.random() * this.props.interests.length-1 )
      const catId = interestToCatId(this.props.interests[randomCategoryFromUser]);
      const cigareteCostForThreeMonths = this.props.pricePerPack * 120
      console.log('========> cigarete 4 mon',cigareteCostForThreeMonths)
      this.props.getRecommendationsByCategory(catId, cigareteCostForThreeMonths)
    }
  }

  componentDidUpdate() {
    if(this.props.recommendations.length<1) {
      this.fetchRecommendation();
    }
  }

  addToWhishList () {
    // alert()
    this.props.setRecommendationsState()

  }

  render() {

    return (
      <Card
        title={"This is stuff that you can buy from collecting 3 months worth of cigarette"}
      >
        <List containerStyle={{ marginBottom: 20 }}>
          {this.props.recommendations && this.props.recommendations.hasOwnProperty('length') && this.props.recommendations.length > 0 &&
          this.props.recommendations.map((recommendation) => {
            return (
              <TouchableOpacity
                onPress={this.addToWhishList}
              >
                <ListItem
                  key={ recommendation.thumbnail }
                  avatar={ { uri: recommendation.thumbnail } }
                  title={ recommendation.name }
                  subtitle={ `Rp. ${thousandSeperator(recommendation.price)}` }
                />
              </TouchableOpacity>
            );
          })}
        </List>
        {// <Button
        //   title="More recommendation"
        //   backgroundColor="#e3871fff"
        // />
        }
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    recommendations: state.recommendationItems,
    interests: state.user.interests,
    moneySaved: state.user.moneySaved,
    pricePerPack: state.user.pricePerPack,
    allState: state,
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

export default connect(mapStateToProps, mapDispatchToProps)(TopRecommendations);
