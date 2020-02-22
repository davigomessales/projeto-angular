import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.models';
import { ContatoService } from '../services/contato.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contato: Contato;
  contatos: Contato[];
  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contato = new Contato();
    this.contatos = this.contatoService.getAll();
  }
   saveContato(form: NgForm){
     this.contato = form.value;
     this.contato.id = new Date().getTime().toString();
     this.contatoService.save(this.contato)
     this.contatos.push(this.contato)
     form.resetForm();
   }

}
