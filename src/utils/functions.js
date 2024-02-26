export const carouselFunc = (data = [], range = 3, startingIdx = 0) => {
  let res = [];
  if (data) {
    const n = data?.length;
    const maxLen = startingIdx + range;
    while (startingIdx < maxLen && res.length < range) {
      if (startingIdx < n) {
        startingIdx = startingIdx;
      } else {
        startingIdx = 0;
      }
      // element have to add
      let ele = data[startingIdx];
      startingIdx += 1;
      res.push(ele);
    }

    return { data: res, nextStartingIdx: startingIdx };
  } else {
    return { data: res, nextStartingIdx: startingIdx };
  }
};
