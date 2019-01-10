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
const AgentWrapper_1 = require("../wrappers/AgentWrapper");
class BaseIntent {
    constructor(agent) {
        this.agentWrapper = new AgentWrapper_1.default(agent);
    }
    processRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Promise.resolve(this.prepareResponse());
                this.agentWrapper.add(response);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.processRequest();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    get agent() {
        return this.agentWrapper;
    }
}
exports.BaseIntent = BaseIntent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUludGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhc2VJbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLDJEQUFvRDtBQUVwRCxNQUFzQixVQUFVO0lBRzlCLFlBQVksS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQU1ZLGNBQWM7O1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTSxRQUFRLEdBQVcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDO0tBQUE7SUFFWSxNQUFNOztZQUNqQixJQUFJO2dCQUNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzdCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtRQUNILENBQUM7S0FBQTtJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUEvQkQsZ0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViaG9va0NsaWVudCB9IGZyb20gJ2RpYWxvZ2Zsb3ctZnVsZmlsbG1lbnQnO1xuaW1wb3J0IEludGVudEhhbmRsZXIgZnJvbSAnLi9JbnRlbnRIYW5kbGVyJztcbmltcG9ydCBBZ2VudFdyYXBwZXIgZnJvbSAnLi4vd3JhcHBlcnMvQWdlbnRXcmFwcGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlbnQgaW1wbGVtZW50cyBJbnRlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBhZ2VudFdyYXBwZXI6IEFnZW50V3JhcHBlcjtcblxuICBjb25zdHJ1Y3RvcihhZ2VudDogV2ViaG9va0NsaWVudCkge1xuICAgIHRoaXMuYWdlbnRXcmFwcGVyID0gbmV3IEFnZW50V3JhcHBlcihhZ2VudCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0IG5hbWUoKTogc3RyaW5nO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBwcmVwYXJlUmVzcG9uc2UoKTogUHJvbWlzZTxzdHJpbmc+IHwgc3RyaW5nO1xuXG4gIHB1YmxpYyBhc3luYyBwcm9jZXNzUmVxdWVzdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2U6IHN0cmluZyA9IGF3YWl0IFByb21pc2UucmVzb2x2ZSh0aGlzLnByZXBhcmVSZXNwb25zZSgpKTtcbiAgICAgIHRoaXMuYWdlbnRXcmFwcGVyLmFkZChyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhbmRsZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzUmVxdWVzdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWdlbnQoKTogQWdlbnRXcmFwcGVyIHtcbiAgICByZXR1cm4gdGhpcy5hZ2VudFdyYXBwZXI7XG4gIH1cbn1cbiJdfQ==