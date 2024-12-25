import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path:'characters',
    loadChildren: ()=> import('./characters/characters.module').then(m=> m.CharactersModule)
  },
  {
    path:'planets',
    loadChildren:()=>import('./planets/planets.module').then(m=>m.PlanetsModule)
  },
  {
    path:'transformations',
    loadComponent:()=> import('./transformations/transformation.component').then(m=>m.TransformationsComponent)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
