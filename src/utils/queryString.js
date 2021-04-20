const queryString = {
  stringify: params => {
    return Object.keys(params)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      .join('&');
  },
};

export default queryString;
