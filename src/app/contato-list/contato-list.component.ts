import { Component, OnInit, Input } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../models/contato.models';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  @Input() contatos: Contato[];

  constructor()  { }

  ngOnInit(): void {
  }


}
