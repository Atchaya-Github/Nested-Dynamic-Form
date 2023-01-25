import { Component } from '@angular/core';
import { FieldConfig } from '../field';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  field: FieldConfig;
  group: FormGroup;
}
