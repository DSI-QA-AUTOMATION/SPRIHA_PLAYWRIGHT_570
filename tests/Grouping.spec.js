//const { test, expect } = require("@playwright/test")
import {test, expect} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log('This is before all hook')
})

test.afterAll(async ()=>{
    console.log('This is after all hook')
})

test.beforeEach(async ()=>{
    console.log('This is before each hook')
})

test.afterEach(async ()=>{
    console.log('This is after each hook')
})

test.describe('Group 1' , ()=> {
    test ('Test1' , async ({page}) => {
        console.log ('This is test 1....')
    })

    test ('Test2' , async ({page}) => {
        console.log ('This is test 2....')
    })
})

test.describe.skip('Group 2' , ()=> {
    test ('Test3' , async ({page}) => {
        console.log ('This is test 3....')
    })

    test ('Test4' , async ({page}) => {
        console.log ('This is test 4....')
    })
})
