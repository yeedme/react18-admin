export default function inputRule(str:string ):string{
        const newStr=str.replaceAll(/[0-9a-zA-Z\p{P}]/g, '')
    return newStr
}