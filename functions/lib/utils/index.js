const cleanUndefinedParams = (obj) => {
  return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => (v !== null || v !== undefined)),
  );
};

const isEmptyObject = (obj = {}) => {
  return Object.keys(obj).length === 0;
};

module.exports = {cleanUndefinedParams, isEmptyObject};
