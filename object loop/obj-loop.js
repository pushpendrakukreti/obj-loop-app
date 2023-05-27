function iterateNestedObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'object' && obj[key] !== null) {
            iterateNestedObject(obj[key]);
        } else {
            obj[key] = (typeof obj[key]) !== 'object' ? typeof obj[key] : `${obj[key]}`;
        }
    }
    return obj;
}

const nestedObject = {
    key1: 'value1',
    key2: {
        nestedKey1: 'nestedValue1',
        nestedKey2: 'nestedValue2',
        nestedKey3: {
            deeplyNestedKey: 'deeplyNestedValue'
        },
        nestedKey4: {
            t1: 43,
            t2: {
                t3: 32.21
            },
            t5: undefined,
            t6: null,
        }
    },
    key3: 'value3'
};

console.log(iterateNestedObject(nestedObject));