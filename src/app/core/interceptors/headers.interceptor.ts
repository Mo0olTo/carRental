import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {


  
    req=req.clone({
      setHeaders: {
       accept: ' text/plain',
       'content-Type': 'application/json-patch+json'
       
      }
    })

 


  return next(req);
};
