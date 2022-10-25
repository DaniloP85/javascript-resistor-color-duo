//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const value = (color) => {
  return parseInt(COLORS.indexOf(color[0]) + '' + COLORS.indexOf(color[1]));
};
