import {test, expect} from '@playwright/test'

test ('Test1@sanity' , async ({page}) => {
    console.log ('This is test 1....')
})

test ('Test2@sanity' , async ({page}) => {
    console.log ('This is test 2....')
})


test ('Test3@reg' , async ({page}) => {
    console.log ('This is test 3....')
})

test ('Test4@reg' , async ({page}) => {
    console.log ('This is test 4....')
})

test ('Test5@reg@sanity' , async ({page}) => {
    console.log ('This is test 5....')
})

//npx playwright test tests/Tags.spec.js --project chromium --grep "@reg@sanity"
//npx playwright test tests/Tags.spec.js --project chromium --grep "@reg"
//npx playwright test tests/Tags.spec.js --project chromium --grep "@sanity"
//npx playwright test tests/Tags.spec.js --project chromium --grep "@reg" --grep-invert "@sanity" (Only regression will execute)


