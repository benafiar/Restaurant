const routeHelper = name => {
  switch (name) {
    case 'COMBO MEALS':
      return '/combo_meals';
      break;
    case 'SPECIAL OFFERS':
      return '/special_offers';
      break;
    case 'FLAME GRILLED BEEF':
      return '/flame_grilled_beef';
      break;
    case 'CHICKEN & FISH':
      return '/chicken_n_fish';
      break;
    case 'SIDES':
      return '/sides';
      break;
    case 'DRINKS & COFFEE':
      return '/drinks_n_coffee';
      break;
    case 'SWEETS':
      return '/sweets';
      break;
    case 'SALADS & MORE':
      return '/salads_n_more';
      break;
    case 'KING JR. ':
      return '/king_jr';
      break;
    default:
      return '/';
  }
};

export default routeHelper
