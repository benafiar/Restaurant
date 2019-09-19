const homeColorPicker = name => {
  let color = ""
  switch (name) {
    case 'COMBO MEALS':
      color = '#AB1A2D';
      break;
    case 'SPECIAL OFFERS':
      color = '#AB1A2D';
      break;
    case 'FLAME GRILLED BEEF':
      color = '#8B542F';
      break;
    case 'CHICKEN & FISH':
      color = '#ED7701';
      break;
    case 'SIDES':
      color = '#F6A800';
      break;
    case 'DRINKS & COFFEE':
      color = '#A1007C';
      break;
    case 'SWEETS':
      color = '#0070CD';
      break;
    case 'SALADS & MORE':
      color = '#59980E';
      break;
    case 'KING JR. ':
      color = '#92BFEA';
      break;
    default:
      color = 'black';
  }
  return color
};

export default homeColorPicker