import { Component } from "@angular/core";

@Component({
    selector: 'biopic',
    templateUrl: './biopic.component.html',
    styleUrls: ['./biopic.component.css']
})

export class BiopicComponent {

    movieName: any="";
    actorName: any="";
    movieYear: any="";
    movieList: any=[];

    onAddClick(){
        let newMovieObject={ movieName:this.movieName, actorName:this.actorName, movieYear: this.movieYear};
        this.movieList.push(newMovieObject);
        this.movieName="";
        this.actorName="";
        this.movieYear="";

    }

    onDeleteClick(index:any){

        this.movieList.splice(index, 1)    


    }
}