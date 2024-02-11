/**
 * @param {number[]} ratings
 * @return {number}
 */
function candy(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1); // Initialize candies array with all values set to 1

    // Scan from left to right, make sure right neighbor gets more candies if the ratings are higher
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Scan from right to left, make sure left neighbor gets more candies if the ratings are higher
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Sum up the candies array to get the total number of candies
    return candies.reduce((total, current) => total + current, 0);
};

// Example usage:
const ratings = [1,0,2];
console.log(candy(ratings));
