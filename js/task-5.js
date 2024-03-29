function getSlice(array, value) {
    const index = array.indexOf(value);
    if (index === -1) {
        return [];
    } else {
        return array.slice(0, index + 1);
    }
}
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));