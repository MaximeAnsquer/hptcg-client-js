import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GameListComponent} from "../game-list/game-list.component";
import {GameComponent} from "../game/game.component";
import {UsernameFormComponent} from "../username-form/username-form.component";
import {UsernameGuard} from "../username.guard";
import {AuthenticatedComponent} from "app/authenticated/authenticated.component";

const appRoutes: Routes = [
  { path: 'login', component: UsernameFormComponent },
  {
    path: '', component: AuthenticatedComponent,
    canActivateChild: [UsernameGuard],
    children: [
      { path: '', component: GameListComponent },
      { path: 'game', component: GameComponent },
      { path: '**', component: GameListComponent },
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
