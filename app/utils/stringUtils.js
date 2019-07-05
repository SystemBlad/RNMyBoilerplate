export const getInitials = (name) => {
  if (typeof name !== 'string') {
    return '';
  }
  let initials = Array.prototype.map
    .call(name.split(' '), function(x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join('');
  return initials.substring(0, 2);
};
