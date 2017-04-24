describe("Train/predict works", function () {
    it("Preliminary test and example", function () {
        var model = TS.train([1, 2, 3, 2, 1, 2, 3, 4]);
        var testVector = [1, 999, 2, 4];
        var predicted = TS.predict(model)(testVector);
        expect(predicted[0]).not.toBe(0);
        expect(predicted[1]).toBe(0);
        expect(predicted[2]).not.toBe(0);
        expect(predicted[3]).not.toBe(0);
    });
    it("Array with random-generated mutations", function () {
        var samplesLength = 100;
        var probabilitiyOfMutation = 10;
        var valueChangeRange = { minLow: -3, maxHigh: 3 };
        var mutate = function () { return _.random(0, 100) <= probabilitiyOfMutation; };
        var changeCurrentValue = function () { return _.random(1, 100) < 10; };
        var samples = [];
        var currentValue = 5000; //_.random(1, 50000);
        for (var i = 0; i < samplesLength; i++) {
            samples.push({
                trainedValue: currentValue + _.random(valueChangeRange.minLow, valueChangeRange.maxHigh)
            });
        }
        _.each(samples, function (el) {
            el.mutated = mutate();
            el.testedValue = el.mutated ? el.trainedValue * 10000 : el.trainedValue;
        });
        var model = TS.train(_.map(samples, function (el) { return el.trainedValue; }));
        var predictionVector = TS.predict(model)(_.map(samples, function (el) { return el.testedValue; }));
        console.log(predictionVector);
        for (var i = 0; i < predictionVector.length; i++) {
            samples[i].predictionValue = predictionVector[i];
        }
        console.log('mutations', _.filter(samples, function (el) { return el.mutated; }));
        _.each(samples, function (el) {
            if (el.mutated)
                expect(el.predictionValue).toBe(0);
            else
                expect(el.predictionValue).not.toBe(0);
        });
    });
});
