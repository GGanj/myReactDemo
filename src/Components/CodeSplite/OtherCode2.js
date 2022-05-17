var x = 0;
export function otherFunc2(a, b) {
    console.log("otherFunc2's this: ", this);
    ++x;
    console.log("otherFunc2 static variable x = ", x);
    return a - b;
}