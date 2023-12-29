import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
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
  searchResourceFormGroup!: FormGroup;
  errorMessage!: string;

  constructor(private resourceService: RessourceService, private formBuilder: FormBuilder,
              private fb :FormBuilder) {

  }

  ngOnInit() {
    this.searchResourceFormGroup=this.fb.group({
      keyword : this.fb.control(null)
    })
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

    let keyword=this.searchResourceFormGroup.value.keyword;

    if (keyword==''){
      this.fetchResources();
    }
    this.resourceService.searchResources(keyword).subscribe({
      next :data=>{
        this.resources=data
      }
    })
  }

}
