import { Map } from 'immutable';

let obj = Map({
    id: "Testing"
});

function update(_obj) {
    return _obj.set("updated", true);
}

newObj = update(obj);

console.log(newObj.toJS());