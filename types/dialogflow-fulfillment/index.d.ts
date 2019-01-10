import { DialogflowConversation, RichResponse } from 'actions-on-google';

declare namespace dialogflow.fulfillment {
  interface WebhookClient {
    /**
     * Add a response or list of responses to be sent to Dialogflow
     *
     * @param {RichResponse|string|RichResponse[]|string[]} responses (list) or single responses
     */
    add(responses: RichResponse | string | RichResponse[] | string[]): void;

    /**
     * Add a response or list of responses to be sent to Dialogflow and end the conversation
     * Note: Only supported on Dialogflow v2's telephony gateway, Google Assistant and Alexa integrations
     *
     * @param {RichResponse|string|RichResponse[]|string[]} responses (list) or single responses
     */
    end(responses: RichResponse | string | RichResponse[] | string[]): void;

    /**
     * Add a response to be sent to Dialogflow
     * Private method to add a response to be sent to Dialogflow
     *
     * @param {RichResponse|string} response an object or string representing the rich response to be added
     */
    addResponse_(response: RichResponse | string): void;

    /**
     * Handles the incoming Dialogflow request using a handler or Map of handlers
     * Each handler must be a function callback.
     *
     * @param {Map|requestCallback} handler map of Dialogflow intent name to handler function or
     *     function to handle all requests (regardless of Dialogflow action).
     *     In an intent map, a null can map to a default handler.
     * @return {Promise}
     */
    handleRequest(handler: Map<object, object>): Promise<object>;

    // --------------------------------------------------------------------------
    //          Deprecated Context methods
    // --------------------------------------------------------------------------
    /**
     * Set a new Dialogflow outgoing context: https://dialogflow.com/docs/contexts
     *
     * @example
     * const { WebhookClient } = require('dialogflow-webhook');
     * const agent = new WebhookClient({request: request, response: response});
     * agent.setContext('sample context name');
     * const context = {'name': 'weather', 'lifespan': 2, 'parameters': {'city': 'Rome'}};
     * agent.setContext(context);
     *
     * @param {string|Object} context name of context or an object representing a context
     * @return {WebhookClient}
     * @deprecated
     */
    setContext(context: string | object): WebhookClient;

    /**
     * Clear all existing outgoing contexts: https://dialogflow.com/docs/contexts
     *
     * @example
     * const { WebhookClient } = require('dialogflow-webhook');
     * const agent = new WebhookClient({request: request, response: response});
     * agent.clearOutgoingContexts();
     *
     * @return {WebhookClient}
     * @deprecated
     */
    clearOutgoingContexts(): WebhookClient;

    /**
     * Clear an existing outgoing context: https://dialogflow.com/docs/contexts
     *
     * @example
     * const { WebhookClient } = require('dialogflow-webhook');
     * const agent = new WebhookClient({request: request, response: response});
     * agent.clearContext('sample context name');
     *
     * @param {string} context name of an existing outgoing context
     * @return {WebhookClient}
     * @deprecated
     */
    clearContext(context: string): WebhookClient;

    /**
     * Get an context from the Dialogflow webhook request: https://dialogflow.com/docs/contexts
     *
     * @example
     * const { WebhookClient } = require('dialogflow-webhook');
     * const agent = new WebhookClient({request: request, response: response});
     * let context = agent.getContext('sample context name');
     *
     * @param {string} contextName name of an context present in the Dialogflow webhook request
     * @return {Object} context context object with the context name
     * @deprecated
     */
    getContext(contextName: string): object;

    /**
     * Set the followup event
     *
     * @example
     * const { WebhookClient } = require('dialogflow-webhook');
     * const agent = new WebhookClient({request: request, response: response});
     * let event = agent.setFollowupEvent('sample event name');
     *
     * @param {string|Object} event string with the name of the event or an event object
     */
    setFollowupEvent(event: string | object);

    /**
     * Get Actions on Google DialogflowConversation object
     *
     * @example
     * const { WebhookClient } = require('dialogflow-webhook');
     * const agent = new WebhookClient({request: request, response: response});
     * let conv = agent.conv();
     * conv.ask('Hi from the Actions on Google client library');
     * agent.add(conv);
     *
     * @return {DialogflowConversation|null} DialogflowConversation object or null
     */
    conv(): DialogflowConversation | null;
  }
}
