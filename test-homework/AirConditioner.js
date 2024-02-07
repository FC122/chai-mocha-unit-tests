class AirConditioner {
    constructor(powerStatus) {
        this.powerStatus = powerStatus;
        this.temp = 20;
    }
    toggle() {
        if (this.powerStatus === false) {
            this.powerStatus = true;
            console.log("Air On")
            return this.powerStatus;
        } else {
            this.powerStatus = false
            console.log("Air Off")
            return this.powerStatus;
        }
    }
    setTemp(temp) {
        if (temp > 100 || temp <= 0) {
            console.log("Out of bounds");
        } else {
            this.temp = temp
        }
        return temp
    }
}

module.exports = AirConditioner