const differences = [
  {difference: 1000, unit: 'second'},
  {difference: 60000, unit: 'minute'},
  {difference: 3600000, unit: 'hour'},
  {difference: 86400000, unit: 'day'},
  {difference: 2592000000, unit: 'month'},
  {difference: 31536000000, unit: 'year'},
];

export default function relativeTime(epochMillis, now) {
  if (!now) {
    now = Date.now();
  }
  const difference = now - epochMillis;
  const elapsed = Math.abs(difference);
  const suffix = (difference < 0) ? 'from now' : 'ago';

  const result = differences.reduce((previous, current, index, array) => {
    if (previous.amount !== 0) {
      return previous;
    }
    if (typeof array[index + 1] === 'undefined' || elapsed < array[index + 1].difference) {
      const amount = Math.round(elapsed/current.difference);
      return {amount: amount, unit: current.unit};
    }
    return previous;
  }, {amount: 0});

  const unit = (result.amount === 1) ? result.unit : `${result.unit}s`;
  return `${result.amount} ${unit} ${suffix}`;
}
