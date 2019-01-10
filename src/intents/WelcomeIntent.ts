import { BaseIntent } from './BaseIntent';
import { dialogflow } from '../../types/dialogflow-fulfillment';
import WebhookClient = dialogflow.fulfillment.WebhookClient;

export default class WelcomeIntent extends BaseIntent {
  private readonly intentName: string = 'Default Welcome Intent';
  private readonly defaultResponse: string = "What's up?";

  constructor(agent: WebhookClient) {
    super(agent);
    this.handle = this.handle.bind(this);
  }

  public get name(): string {
    return this.intentName;
  }

  public prepareResponse(): string {
    return this.agent.getSystemMessage(this.defaultResponse);
  }
}
