const checkNested = (obj, str) => {
    let isTrue = false;
    
    for (let key in obj) {

        if (key === str) {
            isTrue = true
            return isTrue
        }

        if (!isTrue) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                checkNested(obj[key], str);
            }
        }

    }

    return isTrue;
}

var test = {
    level1: {
        level2: {
            level3: {
                level4: 'text Level 3',
            }
        }
    },
    level4: "test"
};
const res = 'level1.level2.level3.level4';
console.log(checkNested(test, res.split(".")[3])) // true
console.log(checkNested(test, 'level1.level2.foo')) // false
