
function calculateTotalSpentByCategory(transactions){
   
    const groupedItems = transactions.reduce((acc, transaction) => {
   
    const {category , price} = transaction;
   
    // if its already category or not in acc
        if(!(acc[category] )){
            acc[category]  = 0;  // it is to be number to store the totalspent for that category
           
        }

        // add the transaction
        acc[category] += price;
        

        return acc;
    } , {})

    return Object.entries(groupedItems).map(([category , totalspent]) => ({
        category,
        totalspent
    }))
}


const result = calculateTotalSpentByCategory([ 
    {
        id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
    },
    {
        id: 2,
		timestamp: 1656076800000,
		price: 100,
		category: 'Food',
		itemName: 'Burger',
    },
    {
        id: 3,
		timestamp: 1656076800000,
		price: 100,
		category: 'Clothes',
		itemName: 'Short',
    },
    {
        id: 4,
		timestamp: 1656076800000,
		price: 102,
		category: 'Clothes',
		itemName: 'pant',
    },
    {
        id: 5,
		timestamp: 1656076800000,
		price: 310,
		category: 'Sports',
		itemName: 'Bat',
    },
    {
        id: 6,
		timestamp: 1656076800000,
		price: 210,
		category: 'Sports',
		itemName: 'ball',
    },

]);

console.log(result);


