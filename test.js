const assert = require('assert');
const { describe, it } = require("mocha");
const AirConditioner = require("./AirConditioner.js");

describe("CoffeMachine", () => {

    it('Check that machine can be turned on', () => {
        let ac = new AirConditioner(true);
        assert.strictEqual(ac.toggle(), ac.powerStatus)
    })

    it('Check that machine can be turned off', () => {
        let ac = new AirConditioner(false);
        assert.strictEqual(ac.toggle(), ac.powerStatus)
    })

    it('Check that user can set temp', () => {
        let ac = new AirConditioner(false);
        assert.strictEqual(ac.setTemp(25), 25)
    })

    it('Check that user cant set temp too high', () => {
        let ac = new AirConditioner(false);
        assert.strictEqual(ac.setTemp(101), 20)
    })

    it('Check that user cant set temp too low', () => {
        let ac = new AirConditioner(true);
        assert.strictEqual(ac.setTemp(0), 20)
    })
});