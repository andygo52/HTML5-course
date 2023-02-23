function fizzbuzz(x) {
    if x % 3 == 0 {
        return 'fizz';  
    }
    if x % 5 == 0 {
        return 'buzz';
    }
    if x % 3 == 0 && x % 5 == 0 {

    return 'fizzbuzz';
    }
    return x; 
}

fizzbuzz(3);


