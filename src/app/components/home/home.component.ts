import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numComic='';

  constructor(
    private router: Router
  ) {}

  ngOnInit(){
  }

  comicAleatorio() {
    let validarNum;
    validarNum = Math.random() * (2600 - 0) + 0;
    validarNum = Math.floor(validarNum);
    this.numComic = validarNum.toString();
    sessionStorage.setItem('numComic', this.numComic);    
    this.router.navigate(['comic'])
  }

}
