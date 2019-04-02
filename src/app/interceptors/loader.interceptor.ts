import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderServiceService } from '../services/loader-service.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{

    constructor(public loaderservice: LoaderServiceService){}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        this.loaderservice.show();
        return next.handle(req).pipe(
            finalize(() => this.loaderservice.hide())
        );
    }

}