"use strict";

class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return console.log("Este método es para realizar un cambio en la URL del video");
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;

    }

    playMultimedia() {
        const iframe = document.getElementById(this.id)
        iframe.setAttribute("src", this.url)
    }
    setInicio(time) {
        this._url += `?start=${time}`
    }
}

const reproductorMusica = new Reproductor("https://www.youtube.com/embed/bW6mBnt208s", "iframe-musica")
const reproductorPeliculas = new Reproductor("https://www.youtube.com/embed/uK3RYTb3SGs", "iframe-peliculas")
const reproductorSeries = new Reproductor("https://www.youtube.com/embed/rP4Mi9_jNzE", "iframe-series")

reproductorMusica.setInicio(120);
reproductorPeliculas.setInicio(60);
reproductorSeries.setInicio(180);


const headingOne = document.getElementById("headingOne");
headingOne.addEventListener("click", function (){
    return reproductorMusica.playMultimedia()
})

const headingTwo = document.getElementById("headingTwo");
headingTwo.addEventListener("click", function (){
    return reproductorPeliculas.playMultimedia()
})

const headingThree = document.getElementById("headingThree");
headingThree.addEventListener("click", function (){
    return reproductorSeries.playMultimedia()
})
