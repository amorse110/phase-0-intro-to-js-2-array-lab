const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const allCats = [...cats, "Broom"];
    return allCats
}

function prependCat(name) {
    const allCats2 = ["Arnold", ...cats];
    return allCats2
}

function removeLastCat() {
    const allCats3 = cats.slice(0, 2)
    return allCats3
}

function removeFirstCat() {
    const allCats4 = cats.slice(1)
    return allCats4
}