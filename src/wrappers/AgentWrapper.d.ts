import { dialogflow } from '../../types/dialogflow-fulfillment';
import WebhookClient = dialogflow.fulfillment.WebhookClient;
export default class AgentWrapper {
    private readonly agent;
    constructor(agent: WebhookClient);
    add(data: string): void;
    getSystemMessage(defaultMsg: string): string;
}
