function getCount(objects) {
    let count = 0;
    for(let i = 0; i < objects.length; i++){
        if(check(objects[i].x, objects[i].y)){
            count++;
        }
    }
    return count;
}
let check = (x, y) => {
    return x == y;
}

let obj = [
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            { x: 3, y: 4 },
            { x: 4, y: 5 }
          ]

console.log(getCount(obj));