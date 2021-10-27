import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-exe1314',
  templateUrl: './exe1314.component.html',
  styleUrls: ['./exe1314.component.scss']
})
export class Exe1314Component implements OnInit {
  search: any
  cols: number = 4;
  gridByBreakpoint = {
    xl: 10,
    lg: 8,
    md: 6,
    sm: 4,
    xs: 2
  }
  searchEvent = new Subject<string>();
  filterFilmes: any
  constructor( 
    public filmesService:FilmesService,
    public breakpointObserver: BreakpointObserver) {
      breakpointObserver.observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge,
        ]).subscribe(result => {
          console.log(result)

          if (result.matches) {
             console.log('result.matches')
            if (result.breakpoints['(max-width: 599.98px)']) {
              console.log('result.matches1')
              this.cols = this.gridByBreakpoint.xs;
            }
            if (result.breakpoints['(min-width: 600px) and (max-width: 959.98px)']) {
              console.log('result.matches2')
              this.cols = this.gridByBreakpoint.sm;
            }
            if (result.breakpoints['(min-width: 960px) and (max-width: 1279.98px)']) {
              console.log('result.matches3')
              this.cols = this.gridByBreakpoint.md;
            }
            if (result.breakpoints['(min-width: 1280px) and (max-width: 1919.98px)']) {
              console.log('result.matches4')
              this.cols = this.gridByBreakpoint.lg;
            }
            if (result.breakpoints['(min-width:  1920px)']) {
              console.log('result.matches5')
              this.cols = this.gridByBreakpoint.xl;
            }
          }});
          this.filterFilmes = filmesService.filmes
           this.searchEvent.pipe(
            debounceTime(400),
            distinctUntilChanged())
            .subscribe(value => {
                this.filterFilmes =  filmesService.filmes.filter(v =>  v.nome.toLowerCase().includes(value.toLowerCase()) ||
                v.genero.toLowerCase().includes(value.toLowerCase()) ||
                v.diretor.toLowerCase().includes(value.toLowerCase()) ||
                v.atores.toLowerCase().includes(value.toLowerCase()))
            });



    }

  // ngAfterContentInit() {
  //   this.observableMedia.asObservable().subscribe((change: MediaChange) => {
  //     this.grid.cols = this.gridByBreakpoint[change.mqAlias];
  //   });
  // }


  ngOnInit(): void {
  }

}
