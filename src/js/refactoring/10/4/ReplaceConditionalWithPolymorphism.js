/*before*/
// function plumages(birds){
//     return new Map(birds.map(b => [b.name, plumage(b)]));
// }
// function plumage(bird) {
//     switch (bird.type){
//         case '유럽 제비':
//             return "보통이다."
//         case '아프리카 제비':
//             return (bird.numberOfCoconuts > 2) ? "지쳤다." : "보통이다.";
//         case '노르웨이 파랑 앵무':
//             return (bird.voltage > 100) ? "그을렸다." : "예쁘다."
//         default:
//             return "알 수 없다."
//     }
// }
//
// function airSpeedVelocity(bird){
//     switch (bird.type){
//         case '유럽 제비':
//             return 35
//         case '아프리카 제비':
//             return 40 - 2 * bird.numberOfCoconuts;
//         case '노르웨이 파랑 앵무':
//             return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
//         default:
//             return "알 수 없다."
//     }
// }
//
// const bird = {type: '유럽 제비'};
// console.log(plumage(bird));
// console.log(airSpeedVelocity(bird));
/*after*/
class Bird {

    constructor() {
        this._name = "새";
    }

    get name() {
        return this._name;
    }

    get plumage() {
        return "알 수 없다.";
    }

    get airSpeedVelocity() {
        return "알 수 없다.";
    }
}

class EuropeBarnSwallow extends Bird {

    constructor() {
        super();
        this._name = "유럽 제비;"
    }

    get plumage() {
        return "보통이다.";
    }

    get airSpeedVelocity() {
        return 35;
    }
}

class AfricaBarnSwallow extends Bird {
    constructor(numberOfCoconuts) {
        super();
        this._name = "아프리카 제비";
        this._numberOfCoconuts = numberOfCoconuts;
    }


    get plumage() {
        return (this._numberOfCoconuts > 2) ? "지쳤다." : "보통이다.";
    }

    get airSpeedVelocity() {
        return 40 - 2 & this._numberOfCoconuts;
    }
}

class NorwayBluePsittacidae extends Bird {
    constructor(isNailed, voltage) {
        super();
        this._name = "노르웨이 파랑 앵무";
        this._isNailed = isNailed;
        this._voltage = voltage;
    }

    get plumage() {
        return (this._voltage > 100) ? "그을렸다." : "예쁘다."
    }

    get airSpeedVelocity() {
        return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
}

function createBird(bird) {
    switch (bird.type) {
        case '유럽 제비':
            return new EuropeBarnSwallow();
        case '아프리카 제비':
            return new AfricaBarnSwallow(2);
        case '노르웨이 파랑 앵무':
            return new NorwayBluePsittacidae(false, 10);
        default:
            return new Bird();
    }
}

function plumages(birds) {
    return new Map(birds
        .map(b => createBird(b))
        .map(b => [b.name, b.plumage])
    );
}

const bird = {type: '노르웨이 파랑 앵무'};
let bridObject = createBird(bird)
console.log(bridObject.plumage);
console.log(bridObject.airSpeedVelocity);
console.log(plumages([bird]));