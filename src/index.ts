import { WebhookClient } from 'dialogflow-fulfillment';
import * as express from 'express';
import * as functions from 'firebase-functions';
import IntentHandler from './intents/IntentHandler';
import DefaultFallbackIntent from './intents/DefaultFallbackIntent';
import WelcomeIntent from './intents/WelcomeIntent';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request: express.Request, response: express.Response) => {
    const agent: WebhookClient = new WebhookClient({ request, response });

    const intents: IntentHandler[] = [
      new DefaultFallbackIntent(agent),
      new WelcomeIntent(agent),
    ];

    const intentMap = new Map(
      intents.map(intent => [intent.name, intent.handle] as [string, () => Promise<void> | void])
    );
    agent.handleRequest(intentMap);
  }
);
