import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const employeeGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (sessionStorage.getItem('loginEmp') == 'true') {
    return true;
  }
  else { 
    router.navigate(['/login'])
    return false;
  }
  
};
