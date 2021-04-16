function maximizeExpression(array) {
    // Write your code here.
    if (array.length < 4) return 0;

    let maxValueArray = [];
    maximizeA(maxValueArray, array);
    maximizeB(maxValueArray, array);
    maximizeC(maxValueArray, array);
    maximizeD(maxValueArray, array);

    return maxValueArray.pop();
}

function maximizeA(maxValueArray, array) {
    maxValueArray[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        maxValueArray[i] = Math.max(array[i], maxValueArray[i - 1]);
    }
}

function maximizeB(maxValueArray, array) {
    let newMaxValueArray = [-Infinity]
    for (let i = 1; i < array.length; i++) {
        newMaxValueArray[i] = Math.max(maxValueArray[i - 1] - array[i], newMaxValueArray[i - 1]);
    }
    copyArray(maxValueArray, newMaxValueArray);
}

function maximizeC(maxValueArray, array) {
    let newMaxValueArray = [-Infinity, -Infinity]
    for (let i = 2; i < array.length; i++) {
        newMaxValueArray[i] = Math.max(maxValueArray[i - 1] + array[i], newMaxValueArray[i - 1]);
    }
    copyArray(maxValueArray, newMaxValueArray);
}

function maximizeD(maxValueArray, array) {
    let newMaxValueArray = [-Infinity, -Infinity, -Infinity]
    for (let i = 3; i < array.length; i++) {
        newMaxValueArray[i] = Math.max(maxValueArray[i - 1] - array[i], newMaxValueArray[i - 1]);
    }
    copyArray(maxValueArray, newMaxValueArray);

}

function copyArray(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        array1[i] = array2[i];
    }
}
