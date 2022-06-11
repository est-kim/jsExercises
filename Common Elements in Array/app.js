// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [8, 9, 10, 11, 12, 13, 14, 15];

const arr1 = [true, "orange", "APPLE", "pineapple"];
const arr2 = [false, "orange", "apple", "pineapple", true];

// const arr1 = ["1","2",3];
// const arr2 = [2, 4, 6];

const filteredArray = arr1.filter(meow => arr2.includes(meow));

//write a function that takes in 2 arrays and returns an array with the common items that exist in both
const commonElements = (arr1, arr2) => {
    let solution = []
    for (let i = 0; i < arr1.length; i++) {
        // arr1[i]
        // arr1.indexOf(1) = 'orange'
        console.log(arr2.indexOf(arr1[i]))
        // console.log(arr2.indexOf(i))
        if ((arr2.indexOf(arr1[i])) != -1) {
            solution.push(arr1[i])
        } 
    }
    return solution
}

// var test1 = commonElements([1,2,3], [2, 4, 6]) 
// console.log(test1) // [2]

// var test2 = commonElements(["1","2",3], [2, 4, 6]) 
// console.log(test2) // []


// var test3 = commonElements([true, "orange", "APPLE", "pineapple"], [false, "orange", "apple", "pineapple"]) 
// console.log(test3) // ["orange", "pineapple"]
