import { isFalsy, toValue } from "liquidjs";

/**
 * An enhancement to LiquidJS's where filter that looks for the specified
 * value in an array, if one is found in the named field of each object,
 * and filters *out* matching items.
 *
 * Most of the code in this file is borrowed from LiquidJS with types removed.
 *
 * TODO: Convert this back to TypeScript.
 */
export function* whereExcludes(arr, property, doNotWant) {
  const values = [];
  arr = toArray(toValue(arr));
  for (const item of arr) {
    values.push(
      yield this.context._getFromScope(item, stringify(property).split(".")),
    );
  }
  return arr.filter((_, i) => {
    if (doNotWant === undefined) return isFalsy(values[i], this.context);
    if (isArray(values[i])) return !values[i].includes(doNotWant);
    if (isComparable(doNotWant)) return !doNotWant.equals(values[i]);
    return values[i] !== doNotWant;
  });
}

function toArray(val) {
  if (isNil(val)) return [];
  if (isArray(val)) return val;
  return [val];
}

function isNil(value) {
  return value == null;
}

function isArray(value) {
  // be compatible with IE 8
  return toString.call(value) === "[object Array]";
}

const toString = Object.prototype.toString;

function isComparable(arg) {
  return arg && isFunction(arg.equals);
}

function isFunction(value) {
  return typeof value === "function";
}

function stringify(value) {
  value = toValue(value);
  if (isString(value)) return value;
  if (isNil(value)) return "";
  if (isArray(value)) return value.map((x) => stringify(x)).join("");
  return String(value);
}

function isString(value) {
  return typeof value === "string";
}
