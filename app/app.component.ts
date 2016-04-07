import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './not-found.component';
import {LoginComponent} from './login/login.component';


@RouteConfig([
	{ path: '/', name: 'Home' , component: HomeComponent , useAsDefault: true},
	{ path: '/users', name: 'Users' , component: UsersComponent},
	{ path: '/users/:id', name: 'EditUser', component: UserFormComponent},
	{ path: '/users/new', name: 'NewUser', component:UserFormComponent},
	{ path: '/posts', name: 'Posts' , component: PostsComponent},
	{ path: '/not-found', name: 'NotFound' , component: NotFoundComponent},
    { path: '/login', name: 'Login', component: LoginComponent},
	{ path: '/*other', name: 'Other', redirectTo: ['Home']}
	])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES,NavBarComponent]
})

export class AppComponent {
}