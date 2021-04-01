import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandasService } from '../bandas.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {

  banda: Banda = new Banda();
  bandas: Array<any> = new Array();

  constructor(private bandaService: BandasService) { }

  ngOnInit(): void {
    this.listarBandas();
  }

  cadastrar() {
    this.bandaService.cadastrarBanda(this.banda).subscribe(banda => {
      this.banda = new Banda();
      this.listarBandas();
    }, erro => {
      console.log('Erro no cadastro', erro)
    });
  }

  listarBandas() {
    this.bandaService.listarBandas().subscribe(bandas => {
      this.bandas = bandas;
    }, erro => {
      console.log('Erro na listagem', erro);
    });
  }

  atualizar(id: number) {
    this.bandaService.atualizarBanda(id, this.banda).subscribe(banda => {
      this.banda = new Banda();
      this.listarBandas();
    }, erro => {
      console.log('Erro na atualização', erro)
    });
  }

  remover(id: number) {
    this.bandaService.removerBanda(id).subscribe(banda => {
      this.banda = new Banda();
      this.listarBandas();
    }, erro => {
      console.log('Erro ao remover', erro)
    });
  }

}
