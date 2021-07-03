import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../services/item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item = new Item();
  items : Item[];

  constructor(private item_service : ItemService) { }

  ngOnInit() {

    this.item_service.get_data().subscribe(data => { console.log(data) ; this.items = data } );
  

  }


  post_method()
  {
    this.item_service.add_data(this.item).subscribe(data => console.log(data), error => console.log(error));
    this.ngOnInit();
  }
  
  
  delete_method(id : Number)
  {
    this.item_service.delete_data(id).subscribe(data => console.log(data), error => console.log(error));
    this.ngOnInit();
  }

}
