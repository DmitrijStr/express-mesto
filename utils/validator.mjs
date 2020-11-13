function urlValidator() {
  return /https?:\/\/(.*)/g.test();
}

export default urlValidator;
