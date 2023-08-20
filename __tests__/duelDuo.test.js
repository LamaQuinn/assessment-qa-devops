const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

describe("Click the draw button",()=>{
  test("displays the div with id choices",async()=>{
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css('button[id="draw"]')).click()
    const choicesDiv = await driver.findElement(By.css('section div[id="choices"]'));
    await driver.wait(until.elementIsVisible(choicesDiv), 1000);
  });
});

describe("Clicking the Add to Duo button", () => {
  test("displays the div with id player-duo", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css('button[id="draw"]')).click()
    const choicesDiv = await driver.findElement(By.css('section div[id="choices"]'));
    await driver.wait(until.elementIsVisible(choicesDiv), 1000);

    //check add to duo
    const addToDuoButton = await driver.findElement(By.className("bot-btn")).click();
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuoDiv), 1000);
  });
});