import { Injectable } from '@angular/core';
import { Produtos } from '../models/Produtos'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public ProdutosNoCarrinho: Array<Produtos>
  public ExistemItensNoCarrinho: boolean;
  public QtdItensNoCarrinho: number;

  constructor() {}

  iniciaViariaveis() {
    this.ProdutosNoCarrinho = null;
    this.ExistemItensNoCarrinho = null;
    this.QtdItensNoCarrinho = null;
  }
}
