import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-modal-finalizar',
  templateUrl: './modal-finalizar.component.html',
  styleUrls: ['./modal-finalizar.component.scss']
})
export class ModalFinalizarComponent implements OnInit {

  FormDados: FormGroup;
  cpf = '000.000.000-00'

  constructor(public fb: FormBuilder) { 
    this.FormDados = this.fb.group({
      Nome: ['', Validators.required],
      CPF: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
