// @flow
export function displayLog(tag: string, log: any, important: boolean = false) {
  if (__DEV__) {
    const Reactotron = require('reactotron-react-native').default;
    Reactotron.display({
      name: 'LOG APP',
      preview: tag,
      value: { tag, log },
      important: important,
    });

    console.info('APP LOG: ' + tag);
    if (log) {
      console.log(log);
    }
  }
}

export function isEmpty(value: Object) {
  return (
    // null or undefined
    value == null ||
    // has length and it's zero
    // eslint-disable-next-line no-prototype-builtins
    (value.hasOwnProperty('length') && value.length === 0) ||
    // is an Object and has no keys
    (value.constructor === Object && Object.keys(value).length === 0)
  );
}
