const facts = {
    "cat": ["catone", "cattwo", "catthree","catfour", "catfive", "catsix" ],
    "poke": ["poke1", "poke2", "poke4","poke5", "poke6", "poke7", "poke8", "poke9", "poke10"],
    "dicapri": ["dicapri1", "dicapri2"],
    "triptease": ["tt1", "tt2"]
};

class FactPicker {
    constructor(category) {
        this.category = category;
        this.factSet = facts[category]
    }
}

FactPicker.prototype.randomFact = function() {
    index = this._randomNumber() - 1;
    return this.factSet.splice(index,1)[0]
}

FactPicker.prototype.finalFact = function(reveal) {
    if (reveal) {
        return `You have been pranked by X. We hope you enjoyed your ${this.category}facts.`
    } else {
        return `Congratulations on surviving ${this.category}facts.`
    }
}

FactPicker.prototype._randomNumber = function() {
    return Math.floor(Math.random() * this.factSet.length);
}


module.exports = FactPicker;