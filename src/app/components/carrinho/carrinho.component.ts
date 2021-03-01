import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription } from 'rxjs'
import { Produtos } from '../../models/Produtos'


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  items;
  dataSubscription: Subscription;
  produtoFilter: null;

  constructor(public StorageService: StorageService, public storage: StorageMap) { }

  ngOnInit(): void {
    this.dataSubscription = this.storage.watch('itensCarrinho')
    .subscribe((result) => {
      this.items = result;
    });
    
  }

}
