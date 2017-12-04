function setUserData(userData={}) {
  const resState = {};
  userData.hasOwnProperty('name') && (resState.name = userData.name);
  userData.hasOwnProperty('userId') && (resState.userId = userData._id);
  userData.hasOwnProperty('age') && (resState.age = userData.age);
  userData.hasOwnProperty('pricePerCig') && (resState.pricePerCig = userData.price_per_cigarette);
  userData.hasOwnProperty('moneySaved') && (resState.moneySaved = userData.money_saved);

  return {
    type: "SET_USER_DATA",
    state: resState,
  };
}

export default {
  setUserData,
}
