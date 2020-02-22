import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Contato } from './../models/contato.models'
import { ContatoService } from '../services/contato.service';


@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  @Input() contato: Contato;
  @Output() saveContato = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.contato = new Contato();
  }

  onSubmit(form:NgForm){
 this.saveContato.emit(form);
  }

}
