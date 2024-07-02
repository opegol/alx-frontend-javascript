export default function cleanSet(set, startString) {
  if (
    startString.length === 0
    || typeof set !== 'object'
    || typeof startString !== 'string'
  ) {
    return '';
  }
  const filtSet = [...set].filter((x) => x.startsWith(startString));
  const restStr = filtSet.map((x) => x.slice(startString.length));
  return restStr.join('-');
}
