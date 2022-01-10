/**
 * Intent class
 * 
 * An 'intent' represents the intention to do something. An instance of this class represents an action that is bound to an intent.
 * 
 * @class
 * @constructor
 * @public
 */
export class Intent {

  /** Counts the executions of the intent */
  public counter: number = 0;

  /** If true intent's callback only once */
  public once: boolean = false;

  /** Intent name/identifier */
  public to: string;

  /** Intent's callback function */
  private callback: (...params) => any;

  /**
   * Intent constructor
   * @param to Definition
   * @param callback Callback function
   */
  constructor(to: string, callback: (...params) => any) {
    this.to = to;
    this.callback = callback;
  }

  /**
   * Execute the intent's callback
   * @param params Callback parameters
   */
  public execute(...params): void {
    this.callback(...params);
    this.counter++;
  }
}
