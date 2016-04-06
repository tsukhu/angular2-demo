import {Component, Input} from 'angular2/core';


@Component({
	selector: 'alert',
	template: `
		<div *ngIf="visible" class="alert alert-danger" role="alert">{{ message }}</div>
	`
})

export class AlertComponent {

	@Input() visible = true;
	@Input('alert-message') message = "";
	
}