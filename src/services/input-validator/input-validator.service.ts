import { Injectable } from '@angular/core';

@Injectable()
export class InputValidatorService {

  constructor() { }

  isValid(str) {
    if(/^\w+$/.test(str) === true) {
        if(str.search("_") === -1) {
            if(str.length >=5 && str.length <=12) {
                return true;
            }
        }
    }
    return false;
}

}
