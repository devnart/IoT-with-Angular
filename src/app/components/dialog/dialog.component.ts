import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  myForm!: FormGroup;

  // receive data from parent using 'MAT_DIALOG_DATA'
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      icon: ['', [Validators.required]],
      name: ['', [Validators.required]],
      room: ['', [Validators.required]],
      floor: ['', [Validators.required]],
      status: [Boolean, [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    this.dialogRef.close(form.value);
  }
}
