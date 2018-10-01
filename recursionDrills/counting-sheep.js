function countingSheep(num, message) {
  if (num === 0) {
    return 0;
  }
  console.log(`${num} ${message}`);
  countingSheep(num - 1, message);
}

countingSheep(3, "- Another sheep jump over the fence");
