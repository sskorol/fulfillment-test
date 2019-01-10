import { dialogflow } from '../../types/dialogflow-fulfillment';
import WebhookClient = dialogflow.fulfillment.WebhookClient;

export default class AgentWrapper {
  constructor(private readonly agent: WebhookClient) {}

  public add(data: string): void {
    this.agent.add(data);
  }

  public getSystemMessage(defaultMsg: string): string {
    const { consoleMessages: messages }: any = this.agent;
    const [Text]: any = messages || [];
    const { text = defaultMsg }: any = Text;
    return text;
  }
}
