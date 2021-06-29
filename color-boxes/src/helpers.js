function choice(arr) {
  let randColor = Math.floor(Math.random() * arr.length);
  return arr[randColor];
}

export { choice };