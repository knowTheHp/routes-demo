import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { CanDeactivateComponent } from '../../_guard/auth-deactivate.guard';
import { UserService } from './../../_services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, CanDeactivateComponent {
  user: User;
  allowEdit: any;
  @ViewChild('editForm') editForm: NgForm;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser(this.route.snapshot.params['id']);
    this.route.queryParams.subscribe((query: Params) => {
      this.allowEdit = query['allowEdit'];
    });
    this.route.params.subscribe((params: Params) => {
      this.user = this.userService.getUser(params['id']);
    });
  }

  submit() {
    this.userService.updateUser(this.route.snapshot.params['id'], {
      name: this.nameInput.nativeElement.value,
      email: this.emailInput.nativeElement.value
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.editForm.dirty) {
      return confirm('Are you sure you want to discard the changes?');
    }
    return true;
  }
}
