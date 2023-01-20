import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Response } from './../../modules/response';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll | any;
  public activarSearhBar: boolean = false;
  public idUsuario: number = 0;
  public usuario!: Response;

  constructor(
    private servicioProduct: ProductService
  ) { }

  ngOnInit():void {
    // id usuario
    this.usuario = JSON.parse(sessionStorage.getItem('user')!);
    this.idUsuario = this.usuario.id as any;


    this.servicioProduct.obtenerPrimerosProductos();
    this.servicioProduct.listaProductos$.subscribe(resultado => {
      console.log(resultado);
      if(this.scroll){
        this.scroll.complete();
      }
    }, error => {
      console.log(error);
    })
  }

  public cargarMasElementos(){
    this.servicioProduct.obtenerMasProductos();
  }

  get servicio(){
    return this.servicioProduct;
  }

  public desplegarSearchBar(){
    if(this.activarSearhBar){
      this.activarSearhBar = false;
    } else {
      this.activarSearhBar = true;
    }
  }

}
