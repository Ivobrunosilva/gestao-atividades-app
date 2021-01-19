import { GestaoService } from './../../service/gestao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '/dashboard';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private gestaoService: GestaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
  });
}
      // convenience getter for easy access to form fields
      get f() { return this.formLogin.controls; }

  onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.formLogin.invalid) {
            return;
        }
        this.loading = true;
        this.gestaoService.login(this.f.login.value, this.f.senha.value)
            .pipe(first())
            .subscribe(
                data => {
                    // localStorage.setItem('cdUsuario',data);
                    // this.gestaoService.ListarAtividade();
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                });
  }
}


