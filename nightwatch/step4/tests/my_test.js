const selectors = require('../supporting/selectors')
const functions = require('../supporting/functions')
const data = require('../supporting/data')
module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => functions.uiChecker(browser),
    '2+2=4' : browser => {
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
        browser
            .click(selectors['2'])
            .expect.element(selectors['result']).text.to.equal(data['2+2=4'].button_click_1)
        browser
            .click(selectors['+'])
            .expect.element(selectors['result']).text.to.equal(data['2+2=4'].result_1)
        browser
            .click(selectors['2'])
            .expect.element(selectors['result']).text.to.equal(data['2+2=4'].button_click_3)
        browser
            .click(selectors['='])
            .expect.element(selectors['result']).text.to.equal(data['2+2=4'].result_2)
            // functions.buttonClicker(browser, data.addtest.button[0]
        // here we are using array
    },
    '32.1*2=64.2' : browser => {
        functions.buttonClicker(browser, '3')
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '.')
        functions.buttonClicker(browser, '1')
        functions.buttonClicker(browser, '*')
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '=')
        browser.expect.element(selectors['result']).text.to.equal('64.2')
    }
}