import { BaseIntent } from './BaseIntent';
import { dialogflow } from '../../types/dialogflow-fulfillment';
import WebhookClient = dialogflow.fulfillment.WebhookClient;

export default class DefaultFallbackIntent extends BaseIntent {
  private readonly intent: string = 'Default Fallback Intent';
  private readonly defaultResponse: string = 'Sorry, I am not sure I got it. What would you like me to do?';

  constructor(agent: WebhookClient) {
    super(agent);
    this.handle = this.handle.bind(this);
  }

  public get name(): string {
    return this.intent;
  }

  public prepareResponse(): string {
    return this.agent.getSystemMessage(this.defaultResponse);
  }
}
