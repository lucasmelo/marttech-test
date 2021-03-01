import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../models/Produtos';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  constructor(public StorageService: StorageService) {}

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
        cliente: 'João Silva',
      },
      {
        id: 1,
        descricao: 'Smart TV LED 32” Samsung 32T4',
        valor: 1399,
        imagemProduto: 'tv',
        cliente: 'Carlos Perdeira',
      },
      {
        id: 2,
        descricao: 'Notebook Dell Inspiron i15-3583',
        valor: 4027,
        imagemProduto: 'pc',
        cliente: 'Pedro Bastos',
      },
      {
        id: 3,
        descricao: 'Mini Caixa de Som JBL GO 2 Bluetooth',
        valor: 239,
        imagemProduto: 'caixa',
        cliente: 'Vitoria Souza',
      },
      {
        id: 4,
        descricao: 'iPhone 12 Pro Max Apple 256GB',
        valor: 9746,
        imagemProduto: 'cel',
        cliente: 'Paula Meirelles',
      },
      {
        id: 5,
        descricao: 'Monitor Smart TV LED 24” LG',
        valor: 919.9,
        imagemProduto: 'monitor',
        cliente: 'Vanessa Fernandes',
      },
      {
        id: 6,
        descricao: 'Cadeira de Escritório Presidente',
        valor: 219.9,
        imagemProduto: 'cadeira',
        cliente: 'Lucas Melo',
      },
      {
        id: 7,
        descricao: 'Home Theater Bluetooth 850w ',
        valor: 746.9,
        imagemProduto: 'home',
        cliente: 'Rodrigo Melo',
      },
      {
        id: 8,
        descricao: 'AirPods - com Estojo de Recarga',
        valor: 1199,
        imagemProduto: 'fone',
        cliente: 'Marcelo Francisco',
      },
      {
        id: 9,
        descricao: 'Cozinha Completa Compacta Xangai',
        valor: 611,
        imagemProduto: 'cozinha',
        cliente: 'Fernando Paula',
      },
    ];
  }
}
