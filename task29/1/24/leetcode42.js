/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let left = 0, right = n - 1, left_max = 0, right_max = 0, water = 0;
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > left_max) left_max = height[left];
            else water += left_max - height[left];
            left++;
        } else {
            if (height[right] > right_max) right_max = height[right];
            else water += right_max - height[right];
            right--;
        }
    }
    console.log(water)
    return water;
}
height=[4,2,0,3,2,5,3,4,0,2,1,5]
trap(height)
