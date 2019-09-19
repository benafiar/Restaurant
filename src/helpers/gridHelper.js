const gridHelper = route => {
  let index = null
  switch (route) {
    case '/combo_meals':
      index = 0;
      break;
    case '/special_offers':
      index = 1 ;
      break;
    case '/flame_grilled_beef':
      index = 2;
      break;
    case '/chicken_n_fish':
      index = 3;
      break;
    case '/sides':
      index = 4;
      break;
    case '/drinks_n_coffee':
      index = 5;
      break;
    case '/sweets':
      index = 6;
      break;
    case '/salads_n_more':
      index = 7;
      break;
    case '/king_jr':
      index = 8;
      break;
    default:
      index = 0;
  }
  return index
};

export default gridHelper