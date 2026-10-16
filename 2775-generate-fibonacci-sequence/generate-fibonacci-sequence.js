
var fibGenerator = function*() {
    let prev = 0
    let current = 1
    while(true){
        yield prev

        let next = prev + current
        prev = current
        current = next
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */