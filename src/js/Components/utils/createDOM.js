const createDOM = (stringDOM) => {
  return document.createRange().createContextualFragment(stringDOM)
    .firstElementChild;
};

export default createDOM;
