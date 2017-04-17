import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GameListComponent} from "../game-list/game-list.component";
import {GameComponent} from "../game/game.component";

const appRoutes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'game', component: GameComponent },
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
