import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription } from 'rxjs';
import { Produtos } from '../../models/Produtos';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalFinalizarComponent } from '../../modal/modal-finalizar/modal-finalizar.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  items;
  dataSubscription: Subscription;
  produtoFilter: null;
  itensNoCarrinho = 0;
  resultado;
  quantidade;

  constructor(
    public StorageService: StorageService,
    public storage: StorageMap,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSubscription = this.storage
      .watch('itensCarrinho')
      .subscribe((result) => {
        this.items = result;

        // this.items = [...new Set(this.items)];
        this.items = Array.from(new Set(this.items));
      });

    setTimeout(() => {
      this.recuperaTotal();
    }, 400);

    
  }

  deletaItem(item: Produtos) {
    item.qtd--;

    this.items.forEach((el, index) => {
      if (item.id === el.id) {
        if (item.qtd == 0) {
          // delete this.items[index];
          this.items.splice(index, 1);
        }
      }
      this.recuperaTotal();
    });
    this.StorageService.salvarItem('itensCarrinho', this.items);
  }

  adicionaItem(item: Produtos) {
    item.qtd++;
    // this.items.push(item);
    this.StorageService.salvarItem('itensCarrinho', this.items);
    this.recuperaTotal();
  }

  recuperaTotal() {
    var valores = this.items.map((e) => {
      return e.valor * e.qtd;
    });

    this.resultado = valores.reduce((total, num) => {
      return total + num;
    }, 0);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalFinalizarComponent, {
      width: '250px',
      data: {},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
