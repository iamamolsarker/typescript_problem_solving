type FormatValue = string | number | boolean
const formatValue =(value:FormatValue)=>{
    if(typeof value === "string"){
        return value.toLocaleUpperCase()
    }else if(typeof value === "number"){
        return value * 10
    }else{
        return value = !value;
    }
}

const getLength = <T>(value:string | Array<T>) => {

    if(typeof value === "string"){
        return value.length
    }else{
        return value.length
    }
}

class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type ArrayOfObject = Array<{
    title:string;
    rating:number
}>

const filterByRating = (books:ArrayOfObject)=>{
    return books.filter((book)=> book.rating >= 4)
}


interface User {
    id: number;
    name: string;
    email:string;
    isActive:boolean;
}
const filterActiveUsers = (users:User[]):User[]=>{
    return users.filter((user)=> user.isActive);

}

interface Book{
    title:string;
    author: string;
    publishedYear:number;
    isAvailable:boolean;
}

const printBookDetails = (obj:Book) => {
    const {title,author, publishedYear,isAvailable} = obj;
    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`);
}


type arrOfMixedType = string | number;

const getUniqueValues = (arr1:arrOfMixedType[], arr2:arrOfMixedType[]):arrOfMixedType[]=>{
    const mergedArr = arr1.concat(arr2)
    const uniqueArr = Array.from(new Set(mergedArr))
    return uniqueArr;
}

interface Products{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

const calculateTotalPrice = (products:Products[]):number =>{
    const subTotal = products.reduce((total, product)=>{
        const {price, quantity, discount=0} = product;

        return total + (price * quantity) - (price * quantity * discount/100)
    },0)
    return subTotal;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));