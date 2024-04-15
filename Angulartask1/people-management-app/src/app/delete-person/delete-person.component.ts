import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.scss']
})
export class DeletePersonComponent implements OnInit {
  person: any = { id: null, name: '', age: null };

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.route.snapshot !== null && this.route.snapshot.paramMap !== null) {
      const id = +this.route.snapshot.paramMap.get('id');
      if (!isNaN(id)) {
        this.apiService.getPerson(id).subscribe((data: any) => {
          this.person = data;
        });
      }
    }
  }

  deletePerson() {
    this.apiService.deletePerson(this.person.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}




