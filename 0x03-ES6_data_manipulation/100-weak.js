export const weakMap = new WeakMap();

export function queryAPI(obj) {
  let counter;
  if (!(weakMap.has(obj))) {
    weakMap.set(obj, 1);
  } else {
    counter = weakMap.get(obj);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(obj, counter += 1);
  }
}
