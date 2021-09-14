import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(name:string):ValidatorFn{
       return (control:AbstractControl):ValidationErrors | null => {
            const controlValue:string = control.value;
            if(controlValue.indexOf(name)>-1){
               const validationError:ValidationErrors = {
                    "forbiddenName":`Forminput field should not contain name ${name}`
                };
                return validationError;
            }
            return null;
        }
    }