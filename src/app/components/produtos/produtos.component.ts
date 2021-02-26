import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../models/Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  constructor() {}

  produtos: Array<Produtos> = [];

  ngOnInit(): void {
    this.iniciarVariaveis();
  }

  iniciarVariaveis() {
    this.produtos = [
      {
        id: 0,
        descricao: 'Novo Kindle Paperwhite Amazon ',
        valor: 219.9,
        imagemProduto: 'kindle',
      },
      {
        id: 1,
        descricao: 'Smart TV LED 32” Samsung 32T4',
        valor: 1399,
        imagemProduto: 'tv',
      },
      {
        id: 2,
        descricao: 'Notebook Dell Inspiron i15-3583',
        valor: 4027,
        imagemProduto: 'pc',
      },
      {
        id: 3,
        descricao: 'Mini Caixa de Som JBL GO 2 Bluetooth',
        valor: 239,
        imagemProduto: 'caixa',
      },
      {
        id: 4,
        descricao: 'iPhone 12 Pro Max Apple 256GB',
        valor: 9746,
        imagemProduto: 'cel',
      },
      {
        id: 5,
        descricao: 'Monitor Smart TV LED 24” LG',
        valor: 919.9,
        imagemProduto: 'monitor',
      },
      {
        id: 6,
        descricao: 'Cadeira de Escritório Presidente',
        valor: 219.9,
        imagemProduto: 'cadeira',
      },
      {
        id: 7,
        descricao: 'Home Theater Bluetooth 850w ',
        valor: 746.9,
        imagemProduto: 'home',
      },
      {
        id: 8,
        descricao: 'AirPods - com Estojo de Recarga',
        valor: 1199,
        imagemProduto: 'fone',
      },
      {
        id: 9,
        descricao: 'Cozinha Completa Compacta Xangai',
        valor: 611,
        imagemProduto: 'cozinha',
      },
    ];
  }
}
