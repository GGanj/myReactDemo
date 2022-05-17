var x = 0;
export function otherFunc1(a, b) {
    console.log("otherFunc1's this: ", this);
    ++x;
    console.log("otherFunc1 static variable x = ", x);
    return a + b;
}