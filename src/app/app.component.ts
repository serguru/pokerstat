import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hand } from './helpers/hand';
import { HandValue } from './helpers/hand-value';
import { Row } from './helpers/row';
import { AppService } from './services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { ResetDialogComponent } from './components/reset-dialog/reset-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public appService: AppService,
    public dialog: MatDialog
    ) {
    this.appService.updateRows();
  }

  @ViewChild('file', { static: false }) file;

  ngOnInit(): void {
    this.appService.handsFromLocalStorage();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResetDialogComponent, {
      width: '250px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
      if (!result) {
        return;
      }
      this.appService.resetHands();
    });
  }


  
  get successGroupsVisible(): boolean {
    return localStorage.getItem('successVisible') == 'true';
  }

  set successGroupsVisible(value: boolean) {
    if (this.successGroupsVisible == value) {
      return;
    }
    localStorage.setItem('successVisible', value ? 'true' : 'false');
  }

  onResetHandsClick(): void {
    this.openDialog();
  }

  onFileOpen() {
    if (!this.file.nativeElement.files || this.file.nativeElement.files.length == 0) {
      return;
    }
    const fileContent = this.file.nativeElement.files[0];

    this.appService.processFile(fileContent);
  }

  selectFile() {
    this.file.nativeElement.click();
  }

  onSaveFileClick() {
    this.appService.saveFile();
  }


}


