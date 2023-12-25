import {Component, OnInit} from '@angular/core';
import {Resource} from "../../models/ressource.model";
import {RessourceService} from "../../services/ressource.service";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {catchError, of} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent implements OnInit{

  resources: Resource[] = [];
  newResource: Resource = { id: 0, nom: '', type: '' };
  selectedResourceId: number | null = null;
  searchResourceFormGroup: FormGroup;
  errorMessage!: string;

  constructor(private resourceService: RessourceService, private formBuilder: FormBuilder) {
    this.searchResourceFormGroup = this.formBuilder.group({
      keyword: new FormControl('')
    });
  }

  ngOnInit() {
    this.fetchResources();
      }

  fetchResources() {
    this.resourceService.getResources().subscribe(data => {
      this.resources = data;
    });
  }

  createResource() {
    this.resourceService.createResource(this.newResource).subscribe(() => {
      this.fetchResources();
      this.resetForm();
    });
  }

  updateResource() {


    if (this.selectedResourceId !== null) {
      this.resourceService.updateResource(this.selectedResourceId, this.newResource).subscribe(() => {
        this.fetchResources();
        this.resetForm();
      });
    }
  }

  deleteResource(id: number) {
    this.resourceService.deleteResource(id).subscribe(() => {
      this.fetchResources();
    });
  }

  selectResource(resource: Resource) {
    this.selectedResourceId = resource.id;
    this.newResource = { ...resource };
  }

  resetForm() {
    this.selectedResourceId = null;
    this.newResource = { id: 0, nom: '', type: '' };
  }

  searchResource() {

    let keyword = '';
    const keywordControl = this.searchResourceFormGroup.get('keyword');
    if (keywordControl) {
      keyword = keywordControl.value;
    }

    this.resourceService.searchResources(keyword).pipe(
      catchError(error => {
        this.errorMessage = 'Error occurred while searching for resources';
        return of([]); // Return an empty array or appropriate default value
      })
    ).subscribe(data => {
      console.log('Search results:', data);
      this.resources = data;
    });
  }

}
