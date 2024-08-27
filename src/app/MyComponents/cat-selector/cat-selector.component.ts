import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-cat-selector',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './cat-selector.component.html',
  styleUrl: './cat-selector.component.css'
})
export class CatSelectorComponent {

  groupedMethods: SelectItemGroup[];

  selectedMethod: string | undefined;
  isClicked = false;

  constructor() {
    this.groupedMethods = [
      {
        label: '◆ SFC',
        value: 'de',
        items: [
          { label: 'Algorithm Maintenance', value: 'Algorithm Maintenance' },
          { label: 'Part Number', value: 'Part Number' },
          { label: 'Location', value: 'Location' },
          { label: 'Route', value: 'Route' },
          { label: 'Shop Order', value: 'Shop Order' }
        ]
      },
      {
        label: '◆ CMMS',
        value: 'us',
        items: [
          { label: 'Department', value: 'Department' },
          { label: 'Group', value: 'Group' },
          { label: 'Location', value: 'Location' },
          { label: 'Production Line', value: 'Production Line' },
          { label: 'Problem Category', value: 'Problem Category' },
          { label: 'Problem Type', value: 'Problem Type' },
          { label: 'Event Code', value: 'Event Code' },
          { label: 'Problem', value: 'Problem' },
          { label: 'Asset Type', value: 'Asset Type' },
          { label: 'Asset', value: 'Asset' },
          { label: 'Asset Mapping', value: 'Asset Mapping' }
        ]
      },
      {
        label: '◆ OEE',
        value: 'jp',
        items: [
          { label: 'Shift', value: 'Shift' },
          { label: 'Plant Calendar', value: 'Plant Calendar' },
          { label: 'Root Cause Category', value: 'Root Cause Category' },
          { label: 'Root Cause', value: 'Root Cause' },
          { label: 'Tag Mapping', value: 'Tag Mapping' },
          { label: 'Up/Down Threshold', value: 'Up/Down Threshold' },
          { label: 'soms_target', value: 'soms_target' },
          { label: 'oee_target', value: 'oee_target' },
        ]
      }
    ];
  }

  click() {
    console.log("Button is clicked");
  }
  onsubmit() {
    console.log("Button is clicked ");
    this.isClicked = true;
  }
}
