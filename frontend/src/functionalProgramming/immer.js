import {produce} from 'immer'

let obj = {
    id: "Testing"
};

function update(_obj) {
    produce(_obj, newObj => {
        newObj.updated = true;
    });
}

newObj = update(obj);

console.log(newObj);