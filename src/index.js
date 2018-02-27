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
    let obj = Object.create(null);
    Object.defineProperty(obj,'__proto__',{writable: true, configurable: true});
        return obj;
};  
const incrementor = () => {};
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