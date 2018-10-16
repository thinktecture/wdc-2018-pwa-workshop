import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {NotificationService} from '../../shared/services/notification.service';

@Injectable()
export class UpdateService {
    private _subscription: Subscription;

    constructor(private _notificationService: NotificationService) {
    }

    public register(): void {

    }

    public unregister(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
