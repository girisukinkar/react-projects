import {sum} from './example';

describe("when the arguments passed are positive numbers", () =>{

    test("should return the sum", () => {
        //this function is called assertion

        //Now write the test
        /* 
        expect -> takes the function or logic
        toBe -> is called the matcher, which matches the ouput of your function with the given value
        */
        expect(sum(4,5)).toBe(9);

    })
})
describe("when the arguments passed are negative numbers", () =>{

    test("should throw the error", () => {
       let error;
       try {
           sum(4,-1);
       } catch (err) {
           error = err;
       }

       expect(error).toBeDefined();
       expect(error.message).toBe('One of the number is negative');
    })
})

