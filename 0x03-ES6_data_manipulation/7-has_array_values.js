export default function hasValueFromArray(set, arr) {
  return (!(arr.some((x) => !set.has(x))));
}
