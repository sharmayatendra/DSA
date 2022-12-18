/** problem - 1232:
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 */

const isStarightLine = (coordinates) => {
  let i = 2;
  let isRightAngle = false;
  let coordinateY = coordinates[1][1] - coordinates[0][1];
  let coordinateX = coordinates[1][0] - coordinates[0][0];
  let slope = coordinateY / coordinateX;
  if (slope === Infinity || slope === -Infinity) {
    isRightAngle = true;
  }

  while (i < coordinates.length) {
    let s1 =
      (coordinates[i][1] - coordinates[i - 1][1]) /
      (coordinates[i][0] - coordinates[i - 1][0]);
    if ((s1 === Infinity || s1 === -Infinity) && isRightAngle) {
      i++;
      continue;
    }
    if (s1 !== slope) return false;
    i++;
  }
  return true;
};

console.log(
  isStarightLine([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [6, 7],
  ])
);
