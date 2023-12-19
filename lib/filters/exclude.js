export function exclude(arr, toExclude) {
  const arrayToExclude = [toExclude].flat();
  return arr.filter((item) => !arrayToExclude.includes(item));
}
