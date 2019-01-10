import { BaseIntent } from './BaseIntent';
import { dialogflow } from '../../types/dialogflow-fulfillment';
import WebhookClient = dialogflow.fulfillment.WebhookClient;
export default class WelcomeIntent extends BaseIntent {
    private readonly intentName;
    private readonly defaultResponse;
    constructor(agent: WebhookClient);
    readonly name: string;
    prepareResponse(): string;
}
