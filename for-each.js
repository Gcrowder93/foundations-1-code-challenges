// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArray = [];
    arr.forEach(item => {
        newArray.push(item.name);
    });
    return newArray;
}
/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const typeArray = [];
    arr.forEach((element) => typeArray.push(element.type));
    typeArray.reverse();
    return typeArray;
}


/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

export function makeSpanishLanguageArray(arr) {
    const spanishArray = [];
    arr.forEach((element) =>
        spanishArray.push({
            nombre: `${element.name}`,
            tipo: `${element.type}`,
        })
    );
    return spanishArray;
}
