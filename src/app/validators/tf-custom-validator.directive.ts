import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appTfCustomValidator]',
  providers:[{provide:NG_VALIDATORS,useExisting:TfCustomValidatorDirective,multi:true}]
})
export class TfCustomValidatorDirective implements Validator {

  constructor() { }
  @Input() fbName:string = 'Angular';
  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value.indexOf(this.fbName)>-1){
      const validationError:ValidationErrors = {
          "forbiddenName":`Forminput field should not contain name ${this.fbName}`
      };
      return validationError;
  }
  return null;
  }

}
