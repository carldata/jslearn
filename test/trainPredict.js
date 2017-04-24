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
});
