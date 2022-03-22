import App from "../js/App.js";
import Component from "../js/Components/commons/Component.js"

// jest.mock("../js/App.js")
jest.mock("../js/Components/commons/Component.js")
  
jest.mock("../js/App.js", () => {
  // Works and lets you check for constructor calls:
  return jest.fn().mockImplementation(() => ({ $target: undefined, props: undefined }));
});

test('We can check that App class constructor is called', () => {
  
  const app = new App();
  expect(App).toHaveBeenCalledTimes(1);
});
