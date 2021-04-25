import { DressService } from './../../services/dress.service';
import { Component, OnInit } from '@angular/core';
import { Dress } from 'src/app/models/Dress';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

   dresses;

  constructor( private dressServ:DressService) { }

  async ngOnInit() {
    this.dresses = await this.dressServ.getAll();
  }

}
