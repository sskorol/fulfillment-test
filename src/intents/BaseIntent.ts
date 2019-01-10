import { WebhookClient } from 'dialogflow-fulfillment';
import IntentHandler from './IntentHandler';
import AgentWrapper from '../wrappers/AgentWrapper';

export abstract class BaseIntent implements IntentHandler {
  private readonly agentWrapper: AgentWrapper;

  constructor(agent: WebhookClient) {
    this.agentWrapper = new AgentWrapper(agent);
  }

  public abstract get name(): string;

  public abstract prepareResponse(): Promise<string> | string;

  public async processRequest(): Promise<void> {
    try {
      const response: string = await Promise.resolve(this.prepareResponse());
      this.agentWrapper.add(response);
    } catch (e) {
      console.log(e);
    }
  }

  public async handle(): Promise<void> {
    try {
      await this.processRequest();
    } catch (e) {
      console.log(e);
    }
  }

  public get agent(): AgentWrapper {
    return this.agentWrapper;
  }
}
