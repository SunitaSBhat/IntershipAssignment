import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  person: any = { id: null, name: '', age: null };

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getPerson(id).subscribe((data: any) => {
      this.person = data;
    });
  }

  saveChanges() {
    this.apiService.updatePerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

