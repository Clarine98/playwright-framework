//const {test, expect}= require('@playwright/test');
import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({browser}) => {
    page= await browser.newPage();
    await page.goto('https://app.composio.dev');
    console.log(await page.title());
    //login using github
    await expect(page).toHaveTitle("Login | Composio");
    await page.click('button[title="Get Magic Link"]:nth-of-type(1)');
    await page.waitForTimeout(5000);// Wait for the login form to appear
    await page.locator('#login_field').fill('youremail@gmail.com');
    await page.locator('#password').fill('yourpassword');
    await page.click('input[type="submit"][value="Sign in"]');
    await page.waitForTimeout(5000);// Wait for the login process to complete
    await page.locator('.ml-5');//Ensure the login process completed


  
});

  
  // Test for integrating with GitHub account
test('connecting github account',async ()=>{
    await page.waitForTimeout(5000);
    await page.click('a.cursor-pointer:nth-child(2)');
    await page.waitForTimeout(5000); // Wait for the GitHub integration section to load
    await page.click('#container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)');
    await page.waitForTimeout(5000);// Wait for the integration options to appear
    await page.click('svg.lucide-arrow-right[width="20"][height="20"]');
    await page.waitForTimeout(5000); // Wait for the integration confirmation
    await page.click('button.font-medium');
    await page.waitForTimeout(5000); // Wait for the action to complete
    await page.click('svg.lucide-move-right.h-4.w-4');
    await page.waitForTimeout(5000); // Wait for the final action to complete


});
// Test for performing actions
test ('Performing Actions',async ()=>{
    await page.click('button:has-text("Try actions")') ;
    await page.waitForTimeout(5000); // Wait for actions to load
    await page.click('body > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(4) > button');
    await page.waitForTimeout(5000); // Wait for the action to start
    await page.click('button:has-text("Run action")');
    await page.waitForTimeout(5000); // Wait for the action to complete

});

// Cleanup after all tests
test.afterAll(async () => {
    // Close the page
    if (page) {
        await page.close();
    }
});



    //const context = await browser.newContext();
    //const page = await context.newPage();
   // await page.goto("https://app.composio.dev/")

    
    
    //to login with login link
   // await page.locator('input[type="email"]').fill("clarinereniedelilah@gmail.com");
   // await page.waitForTimeout(2000);
    //await page.click('button[title="Get Magic Link"]:nth-of-type(2)');
   // await page.waitForTimeout(8000);
    
  
   

    //to login with google account
    //await page.locator('button[title="Login with Google"]');
   // await page.waitForTimeout(2000);
    //await page.click('button[title="Login with Google"]');
   // await page.waitForTimeout(2000);
    //await page.locator('input#identifierId').fill("clarinereniedelilah@gmail.com");
    //await page.click('button:has-text("Next")');
    //await page.waitForTimeout(5000);



