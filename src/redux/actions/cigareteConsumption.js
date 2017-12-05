function initDay() {
  return {
    type: 'INIT_DAY',
    state: 0,
  };
}

function consumeOne() {
  return {
    type: 'CONSUME_ONE',
    state: 1,
  };
}

export default {
  initDay,
  consumeOne,
};
