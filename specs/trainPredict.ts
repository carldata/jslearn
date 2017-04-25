describe("Train/predict works", () => {
  it("Preliminary test and example", () => {    
    let model = TS.train([1,2,3,2,1,2,3,4]);    
    let testVector = [1,999,2,4];
    let predicted = TS.predict(model)(testVector);
    expect(predicted[0]).not.toBe(0);
    expect(predicted[1]).toBe(0);
    expect(predicted[2]).not.toBe(0);
    expect(predicted[3]).not.toBe(0);
  });

  it("Array with random-generated mutations", () => {
    const samplesLength = 100;
    const probabilityOfMutation = 10;
    type Sample = { 
      trainedValue: number;
      testedValue: number;
      predictionValue: number;
      mutated: boolean;
    }
    let valueChangeRange = { minLow: -3, maxHigh: 3 };
    let mutate = ():boolean => _.random(0, 100) <= probabilityOfMutation;
    let changeCurrentValue = ():boolean => _.random(1, 100) < 10;
    let samples: Sample[] = [];
    let currentValue = 5000;
    for (let i=0; i < samplesLength; i++) {
      samples.push(<Sample>{
        trainedValue: currentValue + _.random(valueChangeRange.minLow, valueChangeRange.maxHigh)
      });
    }
    _.each(samples, el => {
      el.mutated = mutate(); 
      el.testedValue = el.mutated ? el.trainedValue*10000 : el.trainedValue;
    });
    let model = TS.train(_.map(samples, el => el.trainedValue));
    let predictionVector = TS.predict(model)(_.map(samples, el => el.testedValue));
    for (let i=0; i < predictionVector.length; i++) {
      samples[i].predictionValue = predictionVector[i];
    }
    _.each(samples, el => {
      if (el.mutated)
        expect(el.predictionValue).toBe(0);
      else
        expect(el.predictionValue).not.toBe(0);
    })
  });
});