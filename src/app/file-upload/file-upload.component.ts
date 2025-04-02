import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    MatSnackBarModule, 
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    NgIf
  ],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  fileName = '';
  fileContent = '';
  isUploaded = false;
  dragOver = false;

  constructor(private snackBar: MatSnackBar) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFileUpload(files[0]);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFileUpload(input.files[0]);
    }
  }

  handleFileUpload(file: File): void {
    this.fileName = file.name;
    
    const reader = new FileReader();
    
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        // Store the file in local storage (for demo purposes)
        // Note: In a production app, you'd likely send this to a server
        const content = e.target?.result as string;
        localStorage.setItem('uploadedFile', file.name);
        localStorage.setItem('uploadedFileContent', content);
        
        // Display the file content
        this.fileContent = content;
        this.isUploaded = true;
        
        this.showSuccessMessage('File successfully uploaded!');
      } catch (error) {
        console.error('Error processing file:', error);
        this.showErrorMessage('Error processing file. Please try again.');
      }
    };
    
    reader.onerror = () => {
      this.showErrorMessage('Error reading file. Please try again.');
    };
    
    reader.readAsText(file);
  }

  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar']
    });
  }

  showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    });
  }
}
