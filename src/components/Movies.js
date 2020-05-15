import React, { Component} from 'react'
import omdbconfig from './omdbconfig.js';
import Movie from './Movie.js';
import { NonceProvider } from 'react-select';
const axios = require('axios');


export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            movieIds:['tt4154796','tt0314331','tt0468569','tt0816692','tt4633694','tt0371746','tt0133093','tt6751668'],
            movies:[],
        }
        this.enlarge=(movie)=>{
            let frame=document.querySelector(".lightbox-movie-container");
            let image=document.querySelector(".movie-enlarge-view");
            let name=document.querySelector('.movie-name');
            let description=document.querySelector('.movie-description');
            let time=document.querySelector('.movie-time');
            let director=document.querySelector('.movie-director');
            let award=document.querySelector('.movie-award');
            let imdbScore=document.querySelector('.movie-imdb');
            let metaScore=document.querySelector('.movie-meta');
            frame.style.display="flex";
            image.src=movie.Poster;
            name.innerHTML=movie.Title;
            description.innerHTML=movie.Plot;
            time.innerHTML=movie.Runtime;
            director.innerHTML=movie.Director;
            award.innerHTML=movie.Awards;
            imdbScore.innerHTML="Imdb Score: "+movie.Ratings[0].Value;
            metaScore.innerHTML="Meta Score: "+movie.Ratings[2].Value;
            document.body.classList.add("disable-scrolling"); 
            
        }
        this.returnOrigin=(e)=>{
            var frame=document.querySelector(".lightbox-movie-container");
            if(e.target===frame){
                frame.style.display = "none";
                document.body.classList.remove("disable-scrolling"); 
            }
        }
    }
    componentDidMount(){
        const url='http://www.omdbapi.com/?apikey='+omdbconfig.apiKey+'&i=';
        for(let movieid in this.state.movieIds){
            let urlMovie=url+this.state.movieIds[movieid];
            axios.get(urlMovie).then((response)=>{
                this.setState(()=>{
                    return {movies:[...this.state.movies,response.data]};
                })
            })
        }
    }
    render() {
        const item=this.state.movies.map(movie=>(
            <Movie key={movie.Poster} movie={movie} enlarge={this.enlarge}/>
        ));
        return (
            <div className='movie-container'>
                <div className='movie-grid'>
                    {item}
                </div>
                <div className='lightbox-movie-container' onClick={this.returnOrigin}>
                    <div className='lightbox-movie '>
                        <img className='movie-enlarge-view' alt=''/>
                        <div className='movie-intro'>
                            <h2 className='movie-name'></h2>
                            <p className='movie-rating'><span className=" movie-imdb"></span><span className="movie-meta"></span></p>
                            <p className='movie-description'></p>
                            <p className='movie-award'></p>
                            <p>Directed By <strong class='movie-director'></strong></p>
                            <p className='movie-time'></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}