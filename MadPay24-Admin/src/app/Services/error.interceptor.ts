import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        return throwError('درخواست شما معتبر نمی باشد');
                    }
                    /* Error Exeptions */
                    const appError = error.headers.get('App-Error');
                    if (appError) {
                        return throwError(appError);
                    }
                    /* Error Validation */
                    const serverError = error.error.errors;
                    let modelStateError = '';
                    if (serverError && typeof serverError === 'object') {
                        for (const key in serverError) {
                            if (serverError[key]) {
                                modelStateError += serverError[key] + '\n';
                            }
                        }
                    }
                    /* Error Message */
                    let myError = '';
                    const myserverError = error.error;
                    if (myserverError) {
                    if (myserverError && typeof myserverError === 'object') {
                        if (myserverError.status === false) {
                            myError = myserverError.message;
                        }
                    }
                }
                    return throwError(modelStateError || myError || appError || 'خطای برنامه');
                }
            })
        );
    }
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
