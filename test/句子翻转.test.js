
const reverse = require("../code/句子翻转");


test('句子翻转', ()=>{
  expect(reverse("Hello world I'm HanChao")).toBe("olleH dlrow m'I oahCnaH");
});