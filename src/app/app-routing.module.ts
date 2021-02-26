import { ProdutosComponent } from '../app/components/produtos/produtos.component';
import { CarrinhoComponent } from '../app/components/carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "produtos",
    pathMatch: "full",
  },
  { path: "produtos", component: ProdutosComponent },
  {
    path: "carrinho",
    component: CarrinhoComponent,
  },
  
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
