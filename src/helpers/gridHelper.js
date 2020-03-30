const gridHelper = route => {
  let index = null;
  switch (route) {
    case '/combo_meals':
      index = 0;
      break;
    case '/combo':
      index = 1;
      break;
    case '/special_offers':
      index = 2;
      break;
    case '/flame_grilled_beef':
      index = 3;
      break;
    case '/chicken_n_fish':
      index = 4;
      break;
    case '/sides':
      index = 5;
      break;
    case '/drinks_n_coffee':
      index = 6;
      break;
    case '/sweets':
      index = 7;
      break;
    case '/salads_n_more':
      index = 8;
      break;
    case '/king_jr':
      index = 9;
      break;
    default:
      index = 0;
  }
  return index;
};

export default gridHelper;
