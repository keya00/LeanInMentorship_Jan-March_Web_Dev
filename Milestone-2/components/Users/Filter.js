export function filter(usersList, look) {
  return usersList.filter((item) => item.year.startsWith(look));
}
