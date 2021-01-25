/* before */
// class Person {
//
//     constructor(name) {
//         this._name = name;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     get department() {
//         return this._department;
//     }
//
//     set department(department) {
//         this._department = department;
//     }
// }
//
// class Department {
//
//     get chargeCode() {
//         return this._chargeCode
//     }
//
//     set chargeCode(chargeCode) {
//         this._chargeCode = chargeCode
//     }
//
//     get manager() {
//         return this._manager
//     }
//
//     set manager(manager) {
//         this._manager = manager;
//     }
//
// }
//
// let person = new Person("김철수");
// let department = new Department();
// department.chargeCode = "A0001";
// department.manager = "함매니저";
// person.department = department;
// console.log(person.department.manager)
//
/* after */
//manager에 접근하기 위해 department에 manager가 있다는 것을 알아야 하는데,
//위임을 통해 사용자는 person.manager로 직접 접근 가능
// -> 캡슐화는 모듈들이 시스템의 다른 부분에 대해 알아야 할 내용을 줄여준다.
class Person {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get manager() {
        return this._department.manager;
    }
}

class Department {

    get chargeCode() {
        return this._chargeCode
    }

    set chargeCode(chargeCode) {
        this._chargeCode = chargeCode
    }

    get manager() {
        return this._manager
    }

    set manager(manager) {
        this._manager = manager;
    }

}

const person = new Person("김철수");
const department = new Department();
department.chargeCode = "A0001";
department.manager = "함매니저";
person.department = department;
console.log(person.manager)