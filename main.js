const pt = require('puppeteer');

/*const browser = await puppeteer.launch({
  headless: false,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
})*/

// Launch puppeteer and a new page
pt.launch({headless: false, executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",}).then

(async browser => {

  require('dotenv').config();

  // .env info 
  const gmailUsername = process.env.GMAIL_USERNAME;
  const gmailPassword = process.env.GMAIL_PASSWORD;


  const page = await browser.newPage();
  // Set the viewpoint of the page
  await page.setViewport({ width: 1380, height: 800 });

  // the URL
  await page.goto('https://elsasalpaus.mmg.fi/');

  // Wait for the input field to appear
  await page.waitForSelector("#i0116");

  // Fill in the email address 
  await page.type("#i0116", gmailUsername);

  // Wait for some time to see the filled input field
  //
  // Add a 10-second delay
  await page.waitForTimeout(2000);

  // Click the element with the specified id
  await page.click("#idSIButton9");

  //wait time of 10seconds  
  await page.waitForTimeout(10000);
  // the and then the input //password 
  await page.type("#i0118", gmailPassword);

  await page.click("#idSIButton9");

   // waiting time 10seconds 
  await page.waitForTimeout(10000);
  // clss slecting yes 
  await page.click("#idSIButton9");

  // clicking työpöytä page 

  console.log("You can close the browser manually.");

});
