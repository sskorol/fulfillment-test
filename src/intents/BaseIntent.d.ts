import { WebhookClient } from 'dialogflow-fulfillment';
import IntentHandler from './IntentHandler';
import AgentWrapper from '../wrappers/AgentWrapper';
export declare abstract class BaseIntent implements IntentHandler {
    private readonly agentWrapper;
    constructor(agent: WebhookClient);
    abstract readonly name: string;
    abstract prepareResponse(): Promise<string> | string;
    processRequest(): Promise<void>;
    handle(): Promise<void>;
    readonly agent: AgentWrapper;
}
