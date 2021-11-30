// Calculating Damage
// Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.

// Examples
// damage(40, 5, "second") ➞ 200

// damage(100, 1, "minute") ➞ 6000

// damage(2, 100, "hour") ➞ 720000
// Notes
// Return "invalid" if damage or speed is negative.

function damage(damage, speed, time) {
  if (damage > 0 && speed > 0) {
    if (time === 'second') {
      return damage * speed;
    } else if (time === 'minute') {
      return speed * 60 * damage;
    } else if (time === 'hour') {
      return speed * 60 * 60 * damage;
    }
  } else {
    return 'invalid';
  }
}