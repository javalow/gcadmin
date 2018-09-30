import { MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
	selector: 'edit-item-dialog',
	templateUrl: 'edit-item.dialog.html',
	styleUrls: ['edit-item.dialog.scss']
})
export class EditItemDialog {
	itemName: string = '';
	// itemClient: string = '';

	constructor(private dialogRef: MatDialogRef<EditItemDialog>) {}

	update() {
		this.dialogRef.close(this.itemName);
	}

	cancel() {
		this.dialogRef.close();
	}
}
