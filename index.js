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
    cats.shift();
}

function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
}

function prependCat(name) {
    const moreCats2 = [name, ...cats];
    return moreCats2;
}

function removeLastCat() {
    const lessCats = cats.slice(0, cats.length - 1);
    return lessCats;
}

function removeFirstCat() {
    const lessCats2 = cats.slice(1);
    return lessCats2;
}