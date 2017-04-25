declare interface ITrainedModel {}
declare type TArrayOfProbabilities = number[];

/**
 * Definition of a function returned as a result of the predict() call.
 * The meaning of TArrayOfProbabilities result is simple - it is just an array of probabilites,
 * indicating how probable (based on model) are samples provided in the inputArray, 
 * ranged from 0 (the least improbable) to 1 (most probable)
 */
declare interface IPredictResult {
  (inputArray: number[]): TArrayOfProbabilities;
}

/**
 * Returns a trained model based on input array of numbers
 */
declare function train(inputArray: number[]): ITrainedModel;
  
/**
 * Returns an array of probabilites based on the trained model and input array.
 * 
 * Please note the function composition, i.e. call the following
 * predict(model)(inputArray) 
 * way
 */
declare function predict(model: ITrainedModel): IPredictResult;

/**
 * Typings repeated for Testing with Jasime.
 * Testing application with Jasmine should be migrated from ad-hoc JavaScript project 
 * to WebPack environment :(
 */
export declare namespace TS {
  interface ITrainedModel {}
  type TArrayOfProbabilities = number[];
  interface IPredictResult {
    (inputArray: number[]): TArrayOfProbabilities;
  }
  function train(inputArray: number[]): ITrainedModel;
  function predict(model: ITrainedModel): IPredictResult;
}