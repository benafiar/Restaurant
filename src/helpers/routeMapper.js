const routeMapper = route =>
  ({
    '/flame_grilled_beef': {
      header: 'FLAME GRILLED BEEF',
      color: '#8B542F'
    },
    '/chicken_n_fish': {
      header: 'CHICKEN & FISH',
      color: '#ED7701'
    },
    '/combo_meals': {
      header: 'COMBO MEALS',
      color: '#AB1A2D'
    },
    '/drinks_n_coffee': {
      header: 'DRINKS & COFFEE',
      color: '#A1007C'
    },
    '/king_jr': {
      header: 'KING JR.',
      color: '#92BFEA'
    },
    '/salads_n_more': {
      header: 'SALADS & MORE',
      color: '#59980E'
    },
    '/sides': {
      header: 'SIDES',
      color: '#F6A800'
    },
    '/special_offers': {
      header: 'SPECIAL OFFERS',
      color: '#AB1A2D'
    },
    '/sweets': {
      header: 'SWEETS',
      color: '#0070CD'
    }
  }[route]);

export default routeMapper;
