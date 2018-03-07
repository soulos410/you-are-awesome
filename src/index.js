// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = x => x;
const createNotEnumerableProperty = (name) =>{
    Object.defineProperty(Object.prototype,name,{
        set : function(v){v1 = v},
        get : function(){return v1;},
        configurable : true,
    });
    return name;
};
const createProtoMagicObject = () => {
    let obj = function(){};
    obj.__proto__ = obj.prototype;
    return obj;
};  

let i = 0;
const incrementor = _ => (i++,incrementor);
incrementor.toString = _ => i;

let increment = 0;
const asyncIncrementor = () => {
        increment++;
        return increment;
};

const createIncrementer = () => {
    let inc = 1;
    function* next(){
        while(true){
            yield inc++;
        }
        }
    return next();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(param), 1000);
  });
  promise.then(
      result => result,
      error => 'something went wrong'
    );
    return promise;
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;