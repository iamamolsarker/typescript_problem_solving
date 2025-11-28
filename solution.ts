const formatValue =(value:string | number | boolean)=>{
    if(typeof value === "string"){
        return value.toLocaleUpperCase()
    }else if(typeof value === "number"){
        return value * 10
    }else{
        return value = !value;
    }
}

console.log(formatValue(false));