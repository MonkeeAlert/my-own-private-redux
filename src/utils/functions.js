const DEFAULT_PLACEHOLDERS = [
  'Make a sandwich',
  'Play videogames',
  'Wash dishes',
  'Go for a walk',
  'Take a nap',
];

export const getPlaceholder = _ => {
  return DEFAULT_PLACEHOLDERS[ Math.ceil(Math.random() * DEFAULT_PLACEHOLDERS.length - 1) ];
}

export const timestampToDate = t => {
  const date = new Date(t);
  const hours = date.getHours();
  const mins = date.getMinutes();

  return `${ hours < 10 ? '0' + hours : hours }:${ mins < 10 ? '0' + mins : mins}`;
}