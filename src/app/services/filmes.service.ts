import { Injectable } from '@angular/core';
import FILMES from '../../assets/FILMES.json';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  public filmes: Filme[] = FILMES.filmes
  constructor() {
   }

}
