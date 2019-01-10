# Google function with Dialogflow integration

This repo is just a temporary container to reproduce an issue with virtual-google-assistant.

Install dependencies:
```
npm install
```

Perform firebase auth:
```
firebase login
```

Replace Google project identifier in `.firebaserc`, `./dialogflow/agent.json` and `./test/VGATest.ts` with your own one.

Archive [Dialogflow agent](https://github.com/sskorol/fulfillment-test/tree/master/dialogflow) and import it into your own Google cloud project.

Start [ngrok](https://ngrok.com/) server locally.
```
ngrok http 5000
```

Start google function:
```
npm run serve
```

Concat ngrok https address with local function URL right after `http://localhost:5000`.

Copy/paste it to Dialogflow Fulfillment section on UI.

Replace webhook URL with copied above value in `./dialogflow/agent.json`.

Stop serving google function and run the test:
```
npm run test
```
