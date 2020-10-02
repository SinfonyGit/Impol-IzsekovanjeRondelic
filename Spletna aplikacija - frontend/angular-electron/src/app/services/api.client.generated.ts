﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.5.0.0 (NJsonSchema v10.1.15.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class RondelicaItemsServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:3000";
    }

    getRondelicaItemAll(): Observable<RondelicaItem[]> {
        let url_ = this.baseUrl + "/api/RondelicaItems";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetRondelicaItemAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetRondelicaItemAll(<any>response_);
                } catch (e) {
                    return <Observable<RondelicaItem[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<RondelicaItem[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetRondelicaItemAll(response: HttpResponseBase): Observable<RondelicaItem[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(RondelicaItem.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RondelicaItem[]>(<any>null);
    }

    postRondelicaItem(rondelicaItem: RondelicaItem): Observable<RondelicaItem> {
        let url_ = this.baseUrl + "/api/RondelicaItems";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rondelicaItem);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processPostRondelicaItem(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processPostRondelicaItem(<any>response_);
                } catch (e) {
                    return <Observable<RondelicaItem>><any>_observableThrow(e);
                }
            } else
                return <Observable<RondelicaItem>><any>_observableThrow(response_);
        }));
    }

    protected processPostRondelicaItem(response: HttpResponseBase): Observable<RondelicaItem> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 201) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result201: any = null;
            let resultData201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result201 = RondelicaItem.fromJS(resultData201);
            return _observableOf(result201);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RondelicaItem>(<any>null);
    }

    getRondelicaItem(id: number): Observable<RondelicaItem> {
        let url_ = this.baseUrl + "/api/RondelicaItems/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetRondelicaItem(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetRondelicaItem(<any>response_);
                } catch (e) {
                    return <Observable<RondelicaItem>><any>_observableThrow(e);
                }
            } else
                return <Observable<RondelicaItem>><any>_observableThrow(response_);
        }));
    }

    protected processGetRondelicaItem(response: HttpResponseBase): Observable<RondelicaItem> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = RondelicaItem.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RondelicaItem>(<any>null);
    }

    putRondelicaItem(id: number, rondelicaItem: RondelicaItem): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/RondelicaItems/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rondelicaItem);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processPutRondelicaItem(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processPutRondelicaItem(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processPutRondelicaItem(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<FileResponse | null>(<any>null);
    }

    deleteRondelicaItem(id: number): Observable<RondelicaItem> {
        let url_ = this.baseUrl + "/api/RondelicaItems/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteRondelicaItem(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteRondelicaItem(<any>response_);
                } catch (e) {
                    return <Observable<RondelicaItem>><any>_observableThrow(e);
                }
            } else
                return <Observable<RondelicaItem>><any>_observableThrow(response_);
        }));
    }

    protected processDeleteRondelicaItem(response: HttpResponseBase): Observable<RondelicaItem> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = RondelicaItem.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RondelicaItem>(<any>null);
    }
}

@Injectable()
export class WeatherForecastServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:3000";
    }

    get(): Observable<WeatherForecast[]> {
        let url_ = this.baseUrl + "/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<WeatherForecast[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<WeatherForecast[]>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<WeatherForecast[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(WeatherForecast.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<WeatherForecast[]>(<any>null);
    }
}

export class RondelicaItem implements IRondelicaItem {
    id!: number;
    sirinaTraku!: number;
    dolzinaTraku!: number;
    polmerRondelic!: number;
    razdaljaMedRondelicama!: number;
    zgornjiInSpodnjiRob!: number;
    zacetekInKonecRob!: number;
    steviloOptimalnihRondelic!: number;

    constructor(data?: IRondelicaItem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.sirinaTraku = _data["sirinaTraku"] !== undefined ? _data["sirinaTraku"] : <any>null;
            this.dolzinaTraku = _data["dolzinaTraku"] !== undefined ? _data["dolzinaTraku"] : <any>null;
            this.polmerRondelic = _data["polmerRondelic"] !== undefined ? _data["polmerRondelic"] : <any>null;
            this.razdaljaMedRondelicama = _data["razdaljaMedRondelicama"] !== undefined ? _data["razdaljaMedRondelicama"] : <any>null;
            this.zgornjiInSpodnjiRob = _data["zgornjiInSpodnjiRob"] !== undefined ? _data["zgornjiInSpodnjiRob"] : <any>null;
            this.zacetekInKonecRob = _data["zacetekInKonecRob"] !== undefined ? _data["zacetekInKonecRob"] : <any>null;
            this.steviloOptimalnihRondelic = _data["steviloOptimalnihRondelic"] !== undefined ? _data["steviloOptimalnihRondelic"] : <any>null;
        }
    }

    static fromJS(data: any): RondelicaItem {
        data = typeof data === 'object' ? data : {};
        let result = new RondelicaItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["sirinaTraku"] = this.sirinaTraku !== undefined ? this.sirinaTraku : <any>null;
        data["dolzinaTraku"] = this.dolzinaTraku !== undefined ? this.dolzinaTraku : <any>null;
        data["polmerRondelic"] = this.polmerRondelic !== undefined ? this.polmerRondelic : <any>null;
        data["razdaljaMedRondelicama"] = this.razdaljaMedRondelicama !== undefined ? this.razdaljaMedRondelicama : <any>null;
        data["zgornjiInSpodnjiRob"] = this.zgornjiInSpodnjiRob !== undefined ? this.zgornjiInSpodnjiRob : <any>null;
        data["zacetekInKonecRob"] = this.zacetekInKonecRob !== undefined ? this.zacetekInKonecRob : <any>null;
        data["steviloOptimalnihRondelic"] = this.steviloOptimalnihRondelic !== undefined ? this.steviloOptimalnihRondelic : <any>null;
        return data; 
    }
}

export interface IRondelicaItem {
    id: number;
    sirinaTraku: number;
    dolzinaTraku: number;
    polmerRondelic: number;
    razdaljaMedRondelicama: number;
    zgornjiInSpodnjiRob: number;
    zacetekInKonecRob: number;
    steviloOptimalnihRondelic: number;
}

export class WeatherForecast implements IWeatherForecast {
    date!: Date;
    temperatureC!: number;
    temperatureF!: number;
    summary?: string | null;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.date = _data["date"] ? new Date(_data["date"].toString()) : <any>null;
            this.temperatureC = _data["temperatureC"] !== undefined ? _data["temperatureC"] : <any>null;
            this.temperatureF = _data["temperatureF"] !== undefined ? _data["temperatureF"] : <any>null;
            this.summary = _data["summary"] !== undefined ? _data["summary"] : <any>null;
        }
    }

    static fromJS(data: any): WeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date ? this.date.toISOString() : <any>null;
        data["temperatureC"] = this.temperatureC !== undefined ? this.temperatureC : <any>null;
        data["temperatureF"] = this.temperatureF !== undefined ? this.temperatureF : <any>null;
        data["summary"] = this.summary !== undefined ? this.summary : <any>null;
        return data; 
    }
}

export interface IWeatherForecast {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary?: string | null;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}