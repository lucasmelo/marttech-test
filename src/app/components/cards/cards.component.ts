import { Component, OnInit, Input } from '@angular/core';
import { Carrinho } from '../../models/Carrinho';
import { Produtos } from '../../models/Produtos';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() produtos;
  itensNoCarrinho: number = 0;

  constructor(public StorageService: StorageService) {}

  ngOnInit(): void {
    this.StorageService.iniciaViariaveis();
    console.log(this.produtos);
  }

  adicionarItemCarrinho() {
    this.itensNoCarrinho++;
    this.StorageService.QtdItensNoCarrinho =
      this.StorageService.QtdItensNoCarrinho + 1;
    if (this.itensNoCarrinho > 0) {
      this.StorageService.ExistemItensNoCarrinho = true;
    } else {
      this.StorageService.ExistemItensNoCarrinho = true;
    }
  }

  removerItemCarrinho() {
    this.itensNoCarrinho--;
    this.StorageService.QtdItensNoCarrinho =
      this.StorageService.QtdItensNoCarrinho - 1;

    if (this.itensNoCarrinho > 0) {
      this.StorageService.ExistemItensNoCarrinho = true;
    } else {
      this.StorageService.ExistemItensNoCarrinho = false;
    }
  }
}
