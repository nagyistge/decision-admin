import {ResponseType} from "angular2/http";

export class SapResponse<T> {

    type: ResponseType;
    ok: boolean;
    status: number;
    statusText: string;
    result:T;
}
