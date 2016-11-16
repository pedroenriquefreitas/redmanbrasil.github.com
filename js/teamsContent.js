var headerDivContent = //header para conter o inicio da tabela que só aparece uma vez, por isso nao entra no for
			 "<table id='teamsBRTableContent'>" +
			  "<thead>" +
				"<tr>" +
					"<th>/</th>" +
					"<th>Name</th>" +
					"<th>Team Value</th>" +
					"<th>Stock Value</th>" +
					"<th>Last 5 Games Change</th>" +
				"</tr>" +
			  "</thead>" +
			  "<tbody>";


var bodiesDivContent = "";//necessario para nao aparecer undefined com o i=0, pois a variavel ainda estara vazia

	for(var i = 0; (TeamsAPI['BR'].length) > i; i++){ //for que vai criando a tabela para cada time da array
	bodiesDivContent = bodiesDivContent +
				"<tr id='" + TeamsAPI['BR'][i]['name'] + "TableTD'>" +
					"<td><img src='escudos/escudos_mini/" + TeamsAPI['BR'][i]['code'] + "_mini.png'></td>" +
					"<td>" + TeamsAPI['BR'][i]['name'] + "</td>"+
					"<td>" + TeamsAPI['BR'][i]['value'] + "Bi</td>" +
					"<td>$" + TeamsAPI['BR'][i]['stock'] + "</td>" +
					"<td>" + TeamsAPI['BR'][i]['last_5_games_change'] + "%</td>" +
				"</tr>";
	}


 var bodyDivContent = bodiesDivContent +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/america_mineiro_mini.png'></td>" +
					"<td>América Mineiro</td>"+
					"<td>0.8Bi</td>" +
					"<td>$6.03</td>" +
					"<td>-3%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/atletico_mineiro_mini.png'></td>" +
					"<td>Atlético Mineiro</td>"+
					"<td>5.1Bi</td>" +
					"<td>$20.31</td>" +
					"<td>7%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/cruzeiro_mini.png'></td>" +
					"<td>Cruzeiro</td>"+
					"<td>3.6Bi</td>" +
					"<td>$17.63</td>" +
					"<td>2%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/atletico_paranaense_mini.png'></td>" +
					"<td>Atlético Paranaense</td>"+
					"<td>4.0Bi</td>" +
					"<td>$16.77</td>" +
					"<td>4%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/chapecoense_mini.png'></td>" +
					"<td>Chapecoense</td>"+
					"<td>2.8Bi</td>" +
					"<td>$13.28</td>" +
					"<td>0%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/gremio_mini.png'></td>" +
					"<td>Grêmio</td>"+
					"<td>3.9Bi</td>" +
					"<td>$16.70</td>" +
					"<td>3%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/internacional_mini.png'></td>" +
					"<td>Internacional</td>"+
					"<td>3.1Bi</td>" +
					"<td>$14.25</td>" +
					"<td>2%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/figueirense_mini.png'></td>" +
					"<td>Figueirense</td>"+
					"<td>3.5Bi</td>" +
					"<td>$15.12</td>" +
					"<td>-2%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/corinthias_mini.png'></td>" +
					"<td>Corinthias</td>"+
					"<td>4.7Bi</td>" +
					"<td>$19.01</td>" +
					"<td>0%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/santos_mini.png'></td>" +
					"<td>Santos</td>"+
					"<td>5.2Bi</td>" +
					"<td>$21.03</td>" +
					"<td>9%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/palmeiras_mini.png'></td>" +
					"<td>Palmeiras</td>"+
					"<td>5.9Bi</td>" +
					"<td>$22.13</td>" +
					"<td>3%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/ponte_preta_mini.png'></td>" +
					"<td>Ponte Preta</td>"+
					"<td>3.8Bi</td>" +
					"<td>$16.67</td>" +
					"<td>3%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/sao_paulo_mini.png'></td>" +
					"<td>São Paulo</td>"+
					"<td>3.6Bi</td>" +
					"<td>$15.48</td>" +
					"<td>-3%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/vitoria_mini.png'></td>" +
					"<td>Vitoria</td>"+
					"<td>1.8Bi</td>" +
					"<td>$10.87</td>" +
					"<td>0%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/sport_mini.png'></td>" +
					"<td>Sport</td>"+
					"<td>2.0Bi</td>" +
					"<td>$11.83</td>" +
					"<td>3%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/santa_cruz_mini.png'></td>" +
					"<td>Santa Cruz</td>"+
					"<td>2.0Bi</td>" +
					"<td>$11.09</td>" +
					"<td>-4%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/bahia_mini.png'></td>" +
					"<td>Bahia</td>"+
					"<td>1.9Bi</td>" +
					"<td>$11.72</td>" +
					"<td>2%</td>" +
				"</tr>" +
				"<tr>" +
					"<td><img src='escudos/escudos_mini/goias_mini.png'></td>" +
					"<td>Goiás</td>"+
					"<td>1.3Bi</td>" +
					"<td>$10.57</td>" +
					"<td>-4%</td>" +
				"</tr>" +
				"</table>" +
			"</table>";