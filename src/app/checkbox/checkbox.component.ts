import { Component } from '@angular/core';
import { FieldConfig } from '../field';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  field: FieldConfig;
  group: FormGroup;
}
