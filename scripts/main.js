import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTemporadasElement = document.getElementById("promedioTemporadas");
mostrarTablaSeries(series);
promedioTemporadasElement.innerHTML = "Season average: ".concat(promedioTemporadas(series));
function mostrarTablaSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.platform, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function promedioTemporadas(series) {
    var totalTemporadas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas / series.length;
}
