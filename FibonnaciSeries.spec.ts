import { test } from '@playwright/test';

test('Print Fibonacci Series', async () => {

    //Initialize the variable
    let a = 0;
    let b = 1;

    //Loop till number 10
    for (let i = 0; i < 10; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
});