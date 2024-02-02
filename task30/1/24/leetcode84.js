/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let mh = 0;
    for (let i = 0; i < heights.length; i++) {
        let min = heights[i];
        for (let j = i; j < heights.length; j++) {
            min = Math.min(min, heights[j]);
            const width = j-i+1;
            const area = min * width;
            mh = Math.max(mh, area);
        }
    }
    console.log(mh)
    return mh;
};
heights=[999,999,999,999];
largestRectangleArea(heights)
