"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentWrapper {
    constructor(agent) {
        this.agent = agent;
    }
    add(data) {
        this.agent.add(data);
    }
    getSystemMessage(defaultMsg) {
        const { consoleMessages: messages } = this.agent;
        const [Text] = messages || [];
        const { text = defaultMsg } = Text;
        return text;
    }
}
exports.default = AgentWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnRXcmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWdlbnRXcmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsWUFBWTtJQUMvQixZQUE2QixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQUcsQ0FBQztJQUU5QyxHQUFHLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsVUFBa0I7UUFDeEMsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBUSxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ25DLE1BQU0sRUFBRSxJQUFJLEdBQUcsVUFBVSxFQUFFLEdBQVEsSUFBSSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBYkQsK0JBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWFsb2dmbG93IH0gZnJvbSAnLi4vLi4vdHlwZXMvZGlhbG9nZmxvdy1mdWxmaWxsbWVudCc7XG5pbXBvcnQgV2ViaG9va0NsaWVudCA9IGRpYWxvZ2Zsb3cuZnVsZmlsbG1lbnQuV2ViaG9va0NsaWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlbnRXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhZ2VudDogV2ViaG9va0NsaWVudCkge31cblxuICBwdWJsaWMgYWRkKGRhdGE6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWdlbnQuYWRkKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGdldFN5c3RlbU1lc3NhZ2UoZGVmYXVsdE1zZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IGNvbnNvbGVNZXNzYWdlczogbWVzc2FnZXMgfTogYW55ID0gdGhpcy5hZ2VudDtcbiAgICBjb25zdCBbVGV4dF06IGFueSA9IG1lc3NhZ2VzIHx8IFtdO1xuICAgIGNvbnN0IHsgdGV4dCA9IGRlZmF1bHRNc2cgfTogYW55ID0gVGV4dDtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuIl19