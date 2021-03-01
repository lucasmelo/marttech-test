import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  qtdItens;
  dataSubscription: Subscription;

  constructor(public StorageService: StorageService, public storage: StorageMap) { }

  ngOnInit(): void {
    this.dataSubscription = this.storage.watch('qtdItensCarrinho', { type: 'number' })
      .subscribe((result) => {
        this.qtdItens = result;
      });
  }

  // ngAfterViewChecked() {
  //   this.storage.get('qtdItensCarrinho').subscribe((qtd) => {
  //     this.qtdItens = qtd;

  //     console.log('x', qtd)
  //   });
  // }

  iniciarVariaveis() {
   
  }


}
