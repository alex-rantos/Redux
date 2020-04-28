const obj = {
    id: "MyObject",
    desc: {
        name: "Testing",
        code: 5
    }
}

const updated = {
    ...obj,
    desc: {
        ...obj.desc,
        code = 6
    },
    id: "Update"
}