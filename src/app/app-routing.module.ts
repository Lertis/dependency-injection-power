import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RoutePath } from '@models'

const routes: Routes = [
  {
    path: RoutePath.USE_VALUE,
    loadChildren: () => import('./modules/use-value/use-value.module').then(({ UseValueModule }) => UseValueModule)
  },
  {
    path: RoutePath.USE_CLASS,
    loadChildren: () => import('./modules/use-class/use-class.module').then(({ UseClassModule }) => UseClassModule)
  },
  {
    path: RoutePath.USE_FACTORY,
    loadChildren: () => import('./modules/use-factory/use-factory.module').then(({ UseFactoryModule }) => UseFactoryModule)
  },
  {
    path: RoutePath.USE_EXISTING,
    loadChildren: () => import('./modules/use-existing/use-existing.module').then(({ UseExistingModule }) => UseExistingModule)
  },
  {
    path: RoutePath.TOKEN_PROPS,
    loadChildren: () => import('./modules/token-props/token-props.module').then(({ TokenPropsModule }) => TokenPropsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
