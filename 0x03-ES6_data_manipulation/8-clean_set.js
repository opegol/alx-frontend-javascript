export default function cleanSet(set, startString) {
  const restArr = [];
  if (
    typeof startString !== 'string'
    || !(set instanceof Set)
    || set.size === 0
    || startString.length === 0
  ) {
    return '';
  }
  for (const elem of set) {
    if (elem && elem.startsWith(startString)) {
      restArr.push(elem.slice(startString.length));
    }
  }
  return restArr.join('-');
}
// const filtSet = [...set].filter((x) => x.startsWith(startString));
// const restStr = filtSet.map((x) => x.slice(startString.length));
// return restStr.join('-');
