/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  // letterLogs -> join content - sort by content or id
  // digitLogs -> the same order
  const letterLogs = [];
  const digitLogs = [];
  
  for (let i = 0; i < logs.length; i += 1) {
    const [id, ...content] = logs[i].split(' ');
    
    if (Number.isInteger(+content[0])) {
      digitLogs.push(logs[i]);
    } else {
      letterLogs.push({log: logs[i], content: content.join(' '), id});
    }
  }
  
  letterLogs.sort((a, b) => {
    if (a.content === b.content) return a.id > b.id ? 1 : -1;
    return a.content > b.content ? 1 : -1;
  });
  
  return [...letterLogs.map(item => item.log), ...digitLogs];
};