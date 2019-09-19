const routeHelper = name => {
  let route = '';
  switch (name) {
    case 'COMBO MEALS':
      route = '/combo_meals';
      break;
    case 'SPECIAL OFFERS':
      route = '/special_offers';
      break;
    case 'FLAME GRILLED BEEF':
      route = '/flame_grilled_beef';
      break;
    case 'CHICKEN & FISH':
      route = '/chicken_n_fish';
      break;
    case 'SIDES':
      route = '/sides';
      break;
    case 'DRINKS & COFFEE':
      route = '/drinks_n_coffee';
      break;
    case 'SWEETS':
      route = '/sweets';
      break;
    case 'SALADS & MORE':
      route = '/salads_n_more';
      break;
    case 'KING JR. ':
      route = '/king_jr';
      break;
    default:
      route = '/';
  }
  return route;
};

export default routeHelper;
