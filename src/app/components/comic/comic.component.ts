import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from 'src/app/services/api.services';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  numComic='';
  titComic='';
  urlComic='';
  altTextComic='';
  califRdy=false;
  jsonRes:any;

  constructor(
    private apiService : Apiservice,
    private router: Router
  ) { }

  ngOnInit(){
    this.obtenerNumComic();
    this.cargarComic();
  }

  obtenerNumComic(){
    this.numComic = sessionStorage.getItem('numComic'); 
  }

  cargarComic(){
    this.obtenerNumComic();
    this.apiService.getComic(this.numComic).subscribe(
      (res) => {
        this.jsonRes = res;      
        this.titComic = this.jsonRes.title;
        this.urlComic = this.jsonRes.img;
        this.altTextComic = this.jsonRes.alt;
      }
    )
  }

  puntuacion(puntaje){
    this.califRdy=true;    
  }

  comicAleatorio() {
    let validarNum;
    validarNum = Math.random() * (2600 - 0) + 0;
    validarNum = Math.floor(validarNum);
    this.numComic = validarNum.toString();
    sessionStorage.setItem('numComic', this.numComic);    
    window.location.reload();
  }

  regresar(){
    this.router.navigate(['home'])
  }

}
