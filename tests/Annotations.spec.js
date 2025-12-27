import {test, expect} from '@playwright/test'

//only- specific test
/*test.only('Test1' , async ({page}) => {
    console.log ('This is test 1....')
})

//skip- skip the specific test
test.skip('Test2' , async ({page}) => {
    console.log ('This is test 2....')
})
*/

//Skip test based on the condition
/*test('Test3' , async ({page , browserName}) => {
    console.log ('This is test 3....')
    if(browserName === 'firefox'){
        test.skip()
    }
})
*/

//Fixme- skipping the test due to some issues
/*test('Test4' , async ({page}) => {
    test.fixme()
    console.log ('This is test 4....')
})
*/

//Fail- negative test
/*test('Test5' , async ({page}) => {
    test.fail()
    console.log ('This is test 5....')
    expect(1).toBe(2); //expectation and actual failed then the test is passed
})
*/

/*test('Test6' , async ({page , browserName}) => {
    console.log ('This is test 6....')
    if(browserName === 'firefox'){
        test.fail()  //expectation
    }
})
*/

//Slow
test('Test7' , async ({page , browserName}) => {
    test.slow();
    //test.setTimeout(3000)
    await page.goto('https://demoqa.com/forms')
    console.log ('This is test 7....')
})