import { Dialog } from './dialog/dialog.component';
import { Veiculo } from './../../../../models/veiculo';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-veiculo-component',
  templateUrl: './veiculo-component.component.html',
  styleUrls: ['./veiculo-component.component.scss']
})
export class VeiculoComponentComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    modelo: new FormControl(''),
    cor: new FormControl(''),
    anoFabricação: new FormControl(),
    placa:new FormControl(''),
    valorVeiculo: new FormControl(),
    detalhes: new FormControl('')
  });
  public veiculo: Veiculo = new Veiculo();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cadastrar() {
    if (this.form.invalid) {
      alert('Cadastro com: SUCESSO!');
      return;
    }

    this.veiculo = this.form.value;
    let veiculos: Veiculo[];
    let localStorageJson = localStorage.getItem('veiculo');
  }

}
