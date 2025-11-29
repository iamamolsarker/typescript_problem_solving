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
