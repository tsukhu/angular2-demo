import {Component,Output , Input, EventEmitter} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {LoginValidators} from '../shared/loginValidators';

@Component({
    selector: 'login-form',
    templateUrl: './login-form/login-form.component.html'
})
export class LoginFormComponent {

		form: ControlGroup;
        @Output() formEvent = new EventEmitter();
        @Input() error: boolean;
		constructor(fb: FormBuilder) {

			this.form = fb.group ({
				username: ['',Validators.compose(
					[Validators.required,LoginValidators.cannotContainSpace]
					), null
					],
				password: ['',Validators.required],
			})
		}
		login() {
			/*var result = authService.login(this.form.value)

			this.form.find('username').setErrors({
				invalidLogin: true	
			});
			*/
            this.formEvent.emit( { loginForm: this.form.value});
	//		console.log(this.form.value);
		}
}