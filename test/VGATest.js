"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const virtual_google_assistant_1 = require("virtual-google-assistant");
process.env.FIREBASE_CONFIG = JSON.stringify({
    projectId: 'virtualassistant-b6c5f',
});
describe('Dialogflow tests', () => {
    it('Should call welcome intent', () => __awaiter(this, void 0, void 0, function* () {
        const virtualGoogle = virtual_google_assistant_1.VirtualGoogleAssistant.Builder()
            .handler('./src/index.dialogflowFirebaseFulfillment')
            .directory('./dialogflow')
            .create();
        const reply = yield virtualGoogle.utter('hi');
        chai_1.expect(reply.json.queryResult.fulfillmentText).is.eq('Hi Sergey! How are you?');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVkdBVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZHQVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5Qix1RUFBa0U7QUFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMzQyxTQUFTLEVBQUUsd0JBQXdCO0NBQ3BDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEdBQVMsRUFBRTtRQUMxQyxNQUFNLGFBQWEsR0FBRyxpREFBc0IsQ0FBQyxPQUFPLEVBQUU7YUFDakQsT0FBTyxDQUFDLDJDQUEyQyxDQUFDO2FBQ3BELFNBQVMsQ0FBQyxjQUFjLENBQUM7YUFDekIsTUFBTSxFQUFFLENBQUM7UUFFZCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsYUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNsRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCB7IFZpcnR1YWxHb29nbGVBc3Npc3RhbnQgfSBmcm9tICd2aXJ0dWFsLWdvb2dsZS1hc3Npc3RhbnQnO1xuXG5wcm9jZXNzLmVudi5GSVJFQkFTRV9DT05GSUcgPSBKU09OLnN0cmluZ2lmeSh7XG4gIHByb2plY3RJZDogJ3ZpcnR1YWxhc3Npc3RhbnQtYjZjNWYnLFxufSk7XG5cbmRlc2NyaWJlKCdEaWFsb2dmbG93IHRlc3RzJywgKCkgPT4ge1xuICBpdCgnU2hvdWxkIGNhbGwgd2VsY29tZSBpbnRlbnQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdmlydHVhbEdvb2dsZSA9IFZpcnR1YWxHb29nbGVBc3Npc3RhbnQuQnVpbGRlcigpXG4gICAgICAgIC5oYW5kbGVyKCcuL3NyYy9pbmRleC5kaWFsb2dmbG93RmlyZWJhc2VGdWxmaWxsbWVudCcpXG4gICAgICAgIC5kaXJlY3RvcnkoJy4vZGlhbG9nZmxvdycpXG4gICAgICAgIC5jcmVhdGUoKTtcblxuICAgIGNvbnN0IHJlcGx5ID0gYXdhaXQgdmlydHVhbEdvb2dsZS51dHRlcignaGknKTtcbiAgICBleHBlY3QocmVwbHkuanNvbi5xdWVyeVJlc3VsdC5mdWxmaWxsbWVudFRleHQpLmlzLmVxKCdIaSBTZXJnZXkhIEhvdyBhcmUgeW91PycpO1xuICB9KTtcbn0pO1xuIl19