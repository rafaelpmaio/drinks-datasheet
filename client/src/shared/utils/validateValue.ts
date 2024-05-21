export default function  validateValue (value: number, min: number = 0, max: number = 999) {

    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }
    return value;
  }