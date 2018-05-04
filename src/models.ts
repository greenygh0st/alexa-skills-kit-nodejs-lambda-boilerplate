import * as Alexa from "alexa-sdk";

export class IntentController {
    protected handler: Alexa.Handler<Alexa.Request>;

    constructor(handler: Alexa.Handler<Alexa.Request>) {
        this.handler = handler;
    }
}

export interface WorldlyHelloRequest {
    language: string;
}

export interface WorldlyHelloResponse {
    text: string;
    ssml: string;
}