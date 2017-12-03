
const setName = (name) => {
  return {
    type: 'SET_NAME_REGISTER',
    state: {
      name,
    }
  }
}

const setAge = (age) => {
  return {
    type: 'SET_AGE_REGISTER',
    state: {
      age,
    }
  }
}

const setPricePerPack = (pricePerPack) => {
  return {
    type: 'SET_PRICE_PER_PACK',
    state: {
      pricePerPack,
    }
  }
}

const setCigarPerDay = (cigarPerDay) => {
  return {
    type: 'SET_CIGAR_PER_DAY',
    state: {
      cigarPerDay,
    }
  }
}

const setInterests = (interests) => {
  return {
    type: 'SET_INTERESTS',
    state: {
      interests,
    }
  }
}

export default {
  setName,
  setAge,
  setPricePerPack,
  setCigarPerDay,
  setInterests,
}
