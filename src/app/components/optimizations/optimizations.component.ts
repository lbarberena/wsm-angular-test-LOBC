import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ItemsService } from '../../services/items.service';
import { CampaignsService } from '../../services/campaings.service';
import { ItemsModel } from '../../helpers/models/items.models';

@Component({
  selector: 'app-optimizations',
  templateUrl: './optimizations.component.html',
  styleUrls: ['./optimizations.component.css']
})
export class OptimizationsComponent implements OnInit {

  items: ItemsModel[];
  groupName: string;
  campaignName: string;
  min: number = 0;
  max: number = 0;
  activeBtn = false;
  // using Subject to emit the selected item to the child component (instructions.component.ts)
  selectedItem: Subject<ItemsModel> = new Subject<ItemsModel>();
  itemId;
  @Input() actionsArray: any;
  checkedActions = []; // Helper Array in which we store the ojects where the checked property is set to true

  constructor(private itemsService: ItemsService,
              private route: ActivatedRoute,
              private campaignsService: CampaignsService) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('campaignId');
    this.getGroupName();
    this.getCampaigns();
    this.getItems();
  }

  // Fetch items list from endpoint
  getItems() {
    this.itemsService.getItems().subscribe( res => {
      this.items = res;
      
      // Find item in the response array that match the ID in the params, then emit it
      const index = this.items.findIndex( index => index._id === Number(this.itemId) );
      this.emitSelectedItem(res[index]);
    });
  }

  getGroupName() {
    this.campaignsService.getCampaignsGroups().subscribe( res => this.groupName = res[0].name );
  }

  getCampaigns() {
    this.campaignsService.getCampaigns().subscribe( res => {
      this.campaignName = res[0].name;
      this.max = res.length;
    });
  }

  // Emit the object to child component (instructions.components.ts)
  emitSelectedItem( itemData: ItemsModel ) {
    this.activeBtn = false;
    this.selectedItem.next(itemData);
  }

  // function that determines if the continue button in the blue bar will be active or not
  activeContinueBtn(event) {
    this.checkedActions = [];
    event.forEach( element => {
      if ( element.checked ) this.checkedActions.push(element);
    });

    // if the number of checked Actions is greater than 0, we activate the Continue Button in the blue bar
    this.activeBtn = this.checkedActions.length > 0;
  }

}
