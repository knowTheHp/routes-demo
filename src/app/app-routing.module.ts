import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthDeactivateGuard } from './_guard/auth-deactivate.guard';
import { AuthGuard } from './_guard/auth.guard';
import { UserResolver } from './_resolver/user.resolver';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UserListComponent,
    canActivateChild: [AuthGuard],
    resolve: { userlist: UserResolver },
    children: [
      {
        path: ':id/edit',
        component: UserEditComponent,
        canDeactivate: [AuthDeactivateGuard]
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page out of scope' }
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
