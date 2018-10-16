import {Injectable} from '@angular/core';
import {from as fromPromise, Observable, of} from 'rxjs';
import {ApiService} from './base/api.service';

@Injectable()
export class PushNotificationService {
    private _pushSubscription: PushSubscription;

    constructor(private _apiService: ApiService) {
    }

    public async register(): Promise<void> {
        // Key generation: https://web-push-codelab.glitch.me
        // TODO
        const subscription = null;
        this._apiService.post('push', subscription);
    }

    public unregister(): Observable<boolean> {
        if (this._pushSubscription) {
            return fromPromise(this._pushSubscription.unsubscribe());
        }

        return of(true);
    }
}
