// import { cleanup } from '@testing-library/react'
// import { expect } from 'vitest';
// import * as matchers from '@testing-library/jest-dom/matchers';

// // extends Vitest's expect method with methods from react-testing-library
// expect.extend(matchers)

// // runs a cleanup after each test case
// afterEach(() => {
//   cleanup()
// })

//import chromedriver in order for Selenium to open a Chrome browser by itself
import chromedriver from 'chromedriver';

//import the following classes from Selenium
import { Builder, until} from 'selenium-webdriver';

async function runTests() {
  // Your test code goes here
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5173');
    await driver.wait(until.titleIs('ACM Coder\'s Cup 2023'), 1000).then(() => console.log('Title is correct'));
  } catch (error) {
    console.log(error);
  }
  finally {
    
    await driver.quit();
  }
}
runTests();