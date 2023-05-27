const checkNested = (obj, str) => {
    const arr = str.split('.');
    for (let val of arr) {
     if (!obj || !obj.hasOwnProperty(val)) {
        return false;
      }
     obj = obj[val];
    }
     return true;
  }
  
  var test = {
    level1: {
      level2: {
        level3: {
          level4: 'text Level 3',
        }
      }
    },
    level6: "test"
  };
  
  console.log(checkNested(test, 'level1.level2.level3.level4')) // true
  console.log(checkNested(test, 'level1.level2.foo')) // false