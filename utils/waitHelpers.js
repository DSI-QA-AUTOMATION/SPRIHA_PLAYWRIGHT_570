async function waitForText(locator, expectedText, timeout = 5000) {
  await locator
    .page()
    .waitForFunction(
      (el, text) => el.textContent.includes(text),
      await locator.elementHandle(),
      expectedText,
      { timeout },
    );
}

export default {
  waitForText,
};