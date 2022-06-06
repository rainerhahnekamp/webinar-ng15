export function noNull<T extends object>(obj: T): asserts obj is Required<T> {
  for (let propName in obj) {
    const value = obj[propName];
    if (value === null || value === undefined) {
      throw new Error(`${propName} is ${obj[propName]}`);
    }
  }
}
