import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public masaSelected: string
  public imgMasa: string;
  public precioMasa = 0

  public pizzaSelected: string
  public imgPizza: string;
  public preciopizza = 0

  public ingrediente: string
  public imgIngrediente: string;
  public precioIngrediente = 0

  ngOnInit() {
    this.precioIngrediente = 0
  }




  constructor() {}

  public tipoMasa(producto: string)
  {
    if(producto=='madre')
    {
      this.masaSelected='Masa Madre'
      this.imgMasa='../../assets/images/madre.jpg'
      this.precioMasa=6.00
    }
    else if(producto=='fina')
    {
      this.masaSelected='Masa Fina'
      this.imgMasa='../../assets/images/fina.jpg'
      this.precioMasa=3.00
    }
    else if(producto=='gr')
    {
      this.masaSelected ='Gruesa'
      this.imgMasa='../../assets/images/gruesa.jpg'
      this.precioMasa=4.00
    }

  }

  public tipoPizza(producto: string)
  {
    if(producto=='carnes')
    {
      this.pizzaSelected='Pizza de 3 carnes'
      this.imgPizza='../../assets/images/carnes.jpg'
      this.preciopizza=15.00

    }
    else if(producto=='vegana')
    {
      this.pizzaSelected='Pizza Vegetariana'
      this.imgPizza='../../assets/images/vegana.jpg'
      this.preciopizza=7.00
    }
    else if(producto=='haw')
    {
      this.pizzaSelected='Pizza Hawaiana'
      this.imgPizza='../../assets/images/haw.jpg'
      this.preciopizza=11.00
    }
  }
  public ingredienteSelected(producto: string)
  {
    if(producto=='jam')
    {
      this.ingrediente='Extra: Jamon'
      this.imgIngrediente='../../assets/images/jam.jpg'
      this.precioIngrediente=2.00
    }
    else if(producto=='pina')
    {
      this.ingrediente='Extra: Piña'
      this.imgIngrediente='../../assets/images/pia.jpg'
      this.precioIngrediente=1.50
    }
    else if(producto=='champinones')
    {
      this.ingrediente='Extra: Champiñones'
      this.imgIngrediente='../../assets/images/cham.jpg'
      this.precioIngrediente=0.50
    }
  }

}
