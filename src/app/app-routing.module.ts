import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MetroComponent } from './pages/metro/metro.component';
import { TremComponent } from './pages/trem/trem.component';
import { RedeComponent } from './pages/rede/rede.component';
import { InfosComponent } from './pages/infos/infos.component';
import { TrajetoComponent } from './pages/trajeto/trajeto.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'metro',
    component: MetroComponent
  },
  {
    path: 'Trem',
    component: TremComponent
  },
  {
    path: 'Rede',
    component: RedeComponent
  },
  {
    path: 'infos',
    component: InfosComponent
  },
  {
    path: 'trajeto',
    component: TrajetoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
