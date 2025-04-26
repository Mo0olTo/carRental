import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {



  req=req.clone({
    setHeaders:{
      accept: "text/plain"
    }
  })


  return next(req);
};
