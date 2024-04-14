const map = (arr, func) => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i]));
  }

  return res;
};
