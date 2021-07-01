/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const sortedByStart = [...intervals].sort((a, b) => a[0] - b[0]);
  const sortedByEnd = intervals.sort((a, b) => a[1] - b[1]);
  
  let rooms = 0;
  let end = 0;
  
  for (let i = 0; i < intervals.length; i += 1) {
    if (sortedByStart[i][0] < sortedByEnd[end][1]) {
      rooms += 1;
    } else {
      end += 1;
    }
  }
  
  return rooms;
};