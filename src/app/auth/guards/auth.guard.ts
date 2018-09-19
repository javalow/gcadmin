import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { MatSnackBar } from '@angular/material';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService,
		private router: Router,
		private snackBar: MatSnackBar) {}

	canActivate(): Observable<boolean> {
		const as = this.authService
		return as
			.auth()
			.map(authState => {
				return !!authState;
			})
			.do(authenticated => {
				if (!authenticated) {
					this.router.navigate(['/sign-in']);
				} else {
					// Check roles
					// Only Admins allowed
					if (!this.authService.isAdmin()) {
						this.authService.signOut();
						this.router.navigate(['/sign-in']);
						this.snackBar.open('Only Adminstrators allowed.', 'Ok', {
							duration: 3000
						});
					}
				}
			});
	}
}
