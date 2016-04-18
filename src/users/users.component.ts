import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {UserService} from './user.service';
import {SpinnerComponent} from '../shared/spinner.component';
import {AlertComponent} from '../shared/alert.component';

@Component({
	templateUrl: './users/users.component.html',
	providers: [UserService],
	directives: [RouterLink,SpinnerComponent,AlertComponent]
})

export class UsersComponent implements OnInit{

	users: any[];
	isLoading=true;
	userServiceError=false;
	errorMessage;

	constructor(private _service: UserService) {

	}

	ngOnInit() {
		this._service.getUsers()
			.subscribe(
				users => this.users = users,
				error => {
					this.userServiceError = true;
					this.errorMessage = "Unable able to connect";
					this.isLoading = false;
				},
				() => {
					this.isLoading = false;
				});
	}

	deleteUser(user) {
		if(confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user);

			this.users.splice(index,1);

			this._service.deleteUser(user.id)
				.subscribe(null,
					err => {
						alert("Could not delete the user.")
						this.users.splice(index,0,user);
					}	

					);
		}


	}
	
}