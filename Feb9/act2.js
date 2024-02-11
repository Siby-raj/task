let image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, color = 0;
let startr = sr, startc = sc;

floodfill(image, sr, sc, color);

function floodfill(image, sr, sc, color) {
    if (sr >= 0 && sr < image.length && sc >= 0 && sc < image[0].length) {
        let curr = image[sr][sc];
        if (curr != color) {
            image[sr][sc] = color;
            //up
            if (sr - 1 >= 0 && image[sr - 1][sc] == curr) {
                floodfill(image, sr - 1, sc, color);
            }
            //down
            if (sr + 1 < image.length && image[sr + 1][sc] == curr) {
                floodfill(image, sr + 1, sc, color);
            }
            //left
            if (sc - 1 >= 0 && image[sr][sc - 1] == curr) {
                floodfill(image, sr, sc - 1, color);
            }
            //right
            if (sc + 1 < image[0].length && image[sr][sc + 1] == curr) {
                floodfill(image, sr, sc + 1, color);
            }
        }
    }
}

image[startr][startc] = color;
console.log(image);