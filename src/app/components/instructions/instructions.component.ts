import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemsModel } from '../../helpers/models/items.models';
import { ActionsModel } from '../../helpers/models/actions.models';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit, OnDestroy {

  @Input() campaignData: Observable<ItemsModel>;
  @Output() checked: EventEmitter<any> = new EventEmitter();
  campaignSubscription: Subscription;
  data: ItemsModel;
  actionsArray: ActionsModel[];

  constructor() { }

  ngOnInit(): void {
    this.campaignSubscription = this.campaignData.subscribe( res => {
      this.data = res;
      this.actionsArray = this.data.actions;
      // create a new property "checked" per obj, it will help activate/deactivate the continue button in the blue bar
      this.actionsArray.forEach( action => {
        action.checked = false;
      });
    });
  }

  ngOnDestroy() {
    this.campaignSubscription.unsubscribe();
  }

  checkAction( actionId: number, event ) {
    // Find the object index in the array that match the actionId and update the checked property
    const index = this.actionsArray.findIndex( action => action._id === actionId );
    this.actionsArray[index].checked = event.target.checked;
    
    // Emit the event to the parent component (optimizations.components.ts)
    this.checked.emit(this.actionsArray);
  }

}
