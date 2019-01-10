import { expect } from 'chai';
import { VirtualGoogleAssistant } from 'virtual-google-assistant';

process.env.FIREBASE_CONFIG = JSON.stringify({
  projectId: 'virtualassistant-b6c5f',
});

describe('Dialogflow tests', () => {
  it('Should call welcome intent', async () => {
    const virtualGoogle = VirtualGoogleAssistant.Builder()
        .handler('./src/index.dialogflowFirebaseFulfillment')
        .directory('./dialogflow')
        .create();

    const reply = await virtualGoogle.utter('hi');
    expect(reply.json.queryResult.fulfillmentText).is.eq('Hi Sergey! How are you?');
  });
});
