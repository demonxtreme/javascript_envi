import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

//
describe('Our first test', () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  });
});

// Using jsdom for run tests with the actual dom without open the browser
describe('index.html', () => {
  it('should say hello', (done) => {  // invoquing asincronous call
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (err, window) {  //in the second parameter we can specify javascript files to run.
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done(); // We need to tell mocha the test is done.
      window.close();
    });
  })
});
