export default function cleanSet(set, startString) {
  let filtSet = [];
  if (startString !== '') {
    filtSet = [...set].filter((x) => x.startsWith(startString));
  }
  const restStr = filtSet.map((x) => x.slice(startString.length));
  return restStr.join('-');
}
