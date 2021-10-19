// Use the filter or find array methods to solve these problems
/*
Input:

[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
];

Output:

[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
];
*/

export function getAllDairy(arr) {
    const dFood = arr.filter(arr => arr.category === 'dairy');
    return dFood;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const cheapFruit = arr.filter(arr => arr.price >= 2 && arr.category === 'fruit');
    return cheapFruit;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const smellyFood = arr.find(arr => arr.id === 'cheese');
    return smellyFood;
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    return [];
}