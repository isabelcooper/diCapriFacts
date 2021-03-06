const FactPicker = require("../src/factPicker.js");

describe('FactPicker', function() {

    describe('Categories', function(){
        it('should create the cat factset if initialised as cat', function() {
            let factpicker = new FactPicker("cat");
            expect(factpicker.factSet).toContain('catone')
        });

        it('should create the dicapri factset if initialised as dicapri', function() {
            let factpicker = new FactPicker("dicapri");
            expect(factpicker.factSet).toContain('dicapri1')
        });
    });

    describe('Random fact selection', function() {
        it('should return a random number up to length of array', function() {
            let factpicker = new FactPicker("cat");
            const mock = jest.spyOn(Math, 'random')
            mock.mockReturnValue(1);
            expect(factpicker._randomNumber()).toEqual(6)
        });

        it('should return a random fact from the array', function() {
            let factpicker = new FactPicker("cat");
            const mock = jest.spyOn(FactPicker.prototype, '_randomNumber')
            mock.mockReturnValue(3);
            expect(factpicker.randomFact()).toEqual('catthree')
        });

        it('should remove used fact from options', function() {
            let factpicker = new FactPicker("cat");
            const mock = jest.spyOn(FactPicker.prototype, '_randomNumber')
            mock.mockReturnValue(3);
            factpicker.randomFact();
            expect(factpicker.factSet).not.toContain('catthree')
        });
    });

    describe('Last message', function() {
        describe('Reveal state', function() {
            it('should return default string if reveal is false', function() {
                let factpicker = new FactPicker("cat");
                expect(factpicker.finalFact(false)).toContain('Congratulations on surviving catfacts.')
            });

            it('should return named string if reveal is true', function() {
                let factpicker = new FactPicker("cat");
                expect(factpicker.finalFact(true)).toContain('You have been pranked by')
            });
        });
    });
});

