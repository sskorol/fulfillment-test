export default interface IntentHandler {
  readonly name: string;

  handle(): Promise<void> | void;
}
