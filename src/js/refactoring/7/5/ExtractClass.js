/* before */
// class Person{
//     constructor(officeAreaCode, officeNumber) {
//         this._officeAreaCode = officeAreaCode;
//         this._officeNumber = officeNumber;
//     }
//     get officeAreaCode(){
//         return this._officeAreaCode;
//     }
//     get officeNumber(){
//         return this._officeNumber;
//     }
// }
// let person = new Person("031","333-2222");
// console.log(person.officeAreaCode)
// console.log(person.officeNumber)
// ************************************************
/* after */
// extract class 클래스 추출하기
class Person {
    constructor(officeAreaCode, officeNumber) {
        this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
    }

    get telephoneNumber() {
        return this._telephoneNumber;
    }
}

class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }

    get areaCode() {
        return this._areaCode;
    }

    get number() {
        return this._number;
    }

    toString() {
        return `(${this.areaCode})-${this.number}`;
    }
}

let person = new Person("031", "333-2222");
console.log(person.telephoneNumber.areaCode)
console.log(person.telephoneNumber.number)
console.log(person.telephoneNumber.toString())