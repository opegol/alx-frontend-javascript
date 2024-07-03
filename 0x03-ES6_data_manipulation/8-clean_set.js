export default function cleanSet(set, startString) {
  const restArr = [];
  if (
    startString.length === 0
    || set.size === 0
    //|| typeof set !== 'object'
    //|| typeof startString !== 'string'
  ) {
    return '';
  }
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      restArr.push(elem.slice(startString.length));
    }
  }
  return restArr.join('-');
}
// const filtSet = [...set].filter((x) => x.startsWith(startString));
// const restStr = filtSet.map((x) => x.slice(startString.length));
// return restStr.join('-');
