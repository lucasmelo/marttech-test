import { PipeTransform, Pipe } from '@angular/core';
import { keyframes } from '@angular/animations';

@Pipe({
    name: 'filter'
})

export class produtoFilterPipe implements PipeTransform {
    
    transform(produtoList: any[], produtoSearchTerm: any) {
        if (!produtoSearchTerm || produtoSearchTerm.length < 3) return produtoList;
        return produtoList.filter(produto => { 
          //return produto.id.toString().includes(produtoSearchTerm) 
          return produto.cliente.toString().includes(produtoSearchTerm) 
        })
    }
}