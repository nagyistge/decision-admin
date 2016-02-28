import {ResponseType} from "angular2/http";

export class DecResponse<T> {

    type: ResponseType;
    ok: boolean;
    status: number;
    statusText: string;
    result:T;
    errorMessage:string;
}
