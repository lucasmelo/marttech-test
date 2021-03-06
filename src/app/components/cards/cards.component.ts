import { Component, OnInit, Input } from '@angular/core';
import { Carrinho } from '../../models/Carrinho';
import { Produtos } from '../../models/Produtos';
import { StorageService } from '../../services/storage.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() produtos;
  itensNoCarrinho = 0;
  items = [];

  constructor(
    public StorageService: StorageService,
    public router: NgxNavigationWithDataComponent,
    public storage: StorageMap
  ) {}

  ngOnInit(): void {
    console.log(this.produtos);
  }

  adicionarItemCarrinho(item: Produtos) {
    this.itensNoCarrinho++;

    item.qtd++;
    
    this.items.push(item);
    this.StorageService.salvarItem('qtdItensCarrinho',this.itensNoCarrinho);
    this.StorageService.salvarItem('itensCarrinho',this.items);
  }

  irParaCheckout() {
    this.router.navigate('/carrinho', {
      items: this.StorageService.QtdItensNoCarrinho,
    });
  }
}
