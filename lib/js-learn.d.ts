/**
 * Typings definition for https://github.com/carldata/jslearn
 */
declare namespace TS {
  /**
   * Just a trained model object - nothing to call upon right now. 
   * Implementation details may vary.
   */
  interface ITrainedModel {}
  type TArrayOfProbabilities = number[];

  /**
   * Definition of a function returned as a result of the predict() call.
   * The meaning of TArrayOfProbabilities result is simple - it is just an array of probabilites,
   * indicating how probable (based on model) are samples provided in the inputArray, 
   * ranged from 0 (the least improbable) to 1 (most probable)
   */
  interface IPredictResult {
    (inputArray: number[]): TArrayOfProbabilities;
  }

  /**
   * Returns a trained model based on input array of numbers
   */
  function train(inputArray: number[]): ITrainedModel;
  
  /**
   * Returns an array of probabilites based on the trained model and input array.
   * 
   * Please note the function composition, i.e. call the following
   * predict(model)(inputArray) 
   * way
   */
  function predict(model: ITrainedModel): IPredictResult;
}