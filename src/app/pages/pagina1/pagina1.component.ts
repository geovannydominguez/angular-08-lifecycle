import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
             AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Geovanny';
  segundos: number = 0;
  timerSubscription!: Subscription;

  // Aquí se hacen inyección de dependencias.
  // El Componente no está inicializado.
  constructor() { 
    console.log('constructor');
  }

  //Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
  //NOTE: If your component has no inputs or you use it without providing any inputs, 
  //the framework will not call ngOnChanges(). 
  //
  // Inputs refers to @Input() and not to HTML inputs.
  //
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    // Limpiar 
    this.timerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    
    // Cuando son Observables "infinitos", deben ser limpiados.
    // La limpieza se lo hace en el ngOnDestroy
    this.timerSubscription = interval(1000).subscribe( i => {this.segundos = i;});
    
  }

  guardar() { }

}
