import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTemporadasElement: HTMLElement = document.getElementById("promedioTemporadas")!;

mostrarTablaSeries(series);
promedioTemporadasElement.innerHTML = `Promedio de temporadas: ${promedioTemporadas(series)}`;

function mostrarTablaSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of series){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.platform}</td>
        <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function promedioTemporadas(series: Serie[]): number{
    let totalTemporadas: number = 0;
    for(let serie of series){
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas/series.length;
}