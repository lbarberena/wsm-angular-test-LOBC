import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {

  constructor() { }

  // Error handling
  handleError( error ) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      console.log(error);
      errorMessage = `<strong>Error:</strong> ${ error.status } <br> <strong>Causa:</strong> ${ error.error.msg }`;
    }

    // Using sweetalert to show a dialog box to the user with the error message
    Swal.fire({
      title: error.statusText,
      html: errorMessage,
      showConfirmButton: true
    });
    return throwError( errorMessage );
  }
}