import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from "@angular/common";
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { DemoMaterialModule } from "../material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";
import { RouterModule } from '@angular/router';
import { produtoFilterPipe } from './filters/produto.filter';
import { FormsModule } from '@angular/forms'; 


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    ProdutosComponent,
    CarrinhoComponent,
    produtoFilterPipe
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    CommonModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'produtos', component: ProdutosComponent},
      {path: 'carrinho', component: CarrinhoComponent},
      {path: '', redirectTo: '/produtos', pathMatch: 'full'},

    ]),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, NgxNavigationWithDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
