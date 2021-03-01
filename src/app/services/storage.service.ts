import { Injectable } from '@angular/core';
import { Produtos } from '../models/Produtos';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public ProdutosNoCarrinho: Array<Produtos>;
  public ExistemItensNoCarrinho: boolean;
  public QtdItensNoCarrinho: number;

  constructor(public storage: StorageMap) {}

  iniciaViariaveis() {
    this.ProdutosNoCarrinho = [];
    this.ExistemItensNoCarrinho = null;
    if (this.QtdItensNoCarrinho > 0) {
      return;
    } else {
      this.QtdItensNoCarrinho = 0;
    }
  }


  salvarItem(key, value) {
    this.storage.set(key, value).subscribe(() => {});
  }
}
