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
    let obj = new String;

    function typeOf(){
        return Object.prototype.toString.call(this)
    }
};  

let i = 0;
const incrementor = _ => (i++,incrementor);
incrementor.toString = _ => i;

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
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