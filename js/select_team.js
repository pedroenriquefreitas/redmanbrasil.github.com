function check1(){
	var val = document.getElementById('LeagueList').value;
	if(val=="BrLeague"){
		$(function () {
     $('#FavBRTeam').removeClass('hidden');
 });
	}
}

function check(){
	var val = document.getElementById('TeamBRList').value;
	if(val=='Fla'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/flamengo.png' height=120>";
	}
	else if(val=='Bot'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/botafogo.png' height=120>";
	}
	else if(val=='Vas'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/vasco.png' height=120>";
	}
	else if(val=='Flu'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/fluminense.png' height=120>";
	}
	else if(val=='Sp'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/sao_paulo.png' height=120>";
	}
	else if(val=='San'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/santos.png' height=120>";
	}
	else if(val=='Pal'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/palmeiras.png' height=120>";
	}
	else if(val=='Cor'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/corinthias.png' height=120>";
	}
	else if(val=='AtlMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/atletico_mineiro.png' height=120>";
	}
	else if(val=='Cru'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/cruzeiro.png' height=120>";
	}
	else if(val=='AltPR'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/atletico_paranaense.png' height=120>";
	}
	else if(val=='Gre'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/gremio.png' height=120>";
	}
	else if(val=='Int'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/internacional.png' height=120>";
	}
	else if(val=='Spo'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/sport.png' height=120>";
	}
	else if(val=='Cha'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/chapecoense.png' height=120>";
	}
	else if(val=='Bah'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/bahia.png' height=120>";
	}
	else if(val=='Vit'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/vitoria.png' height=120>";
	}
	else if(val=='AmeMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/america_mineiro.png' height=120>";
	}
	else if(val=='Coritiba'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/coritiba.png' height=120>";
	}
	else if(val=='Fig'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/figueirense.png' height=120>";
	}
	else if(val=='Pon'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/ponte_preta.png' height=120>";
	}
	else if(val=='Sta'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/santa_cruz.png' height=120>";
	}
	else if(val=='Goi'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazil/goias.png' height=120>";
	}
	else{
		document.getElementById('escudoTime').innerHTML = "";
	}
}

function check2(){
	var val = document.getElementById('NtlTeams').value;
	if(val=='Arge'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/AR.png' height=120>";
	}
	else if(val=='Belg'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/BE.png' height=120>";
	}
	else if(val=='Braz'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/brazil/BR.png' height=120>";
	}
	else if(val=='Chil'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/CL.png' height=120>";
	}
	else if(val=='Chin'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/CN.png' height=120>";
	}
	else if(val=='Colo'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/CO.png' height=120>";
	}
	else if(val=='Ecua'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/EC.png' height=120>";
	}
	else if(val=='Engl'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/GB.png' height=120>";
	}
	else if(val=='Fran'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/FR.png' height=120>";
	}
	else if(val=='Germ'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/DE.png' height=120>";
	}
	else if(val=='Gree'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/GR.png' height=120>";
	}
	else if(val=='Ital'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/IT.png' height=120>";
	}
	else if(val=='Mexi'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/MX.png' height=120>";
	}
	else if(val=='Neth'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/NL.png' height=120>";
	}
	else if(val=='Para'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/PY.png' height=120>";
	}
	else if(val=='Port'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/PT.png' height=120>";
	}
	else if(val=='Spai'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/ES.png' height=120>";
	}
	else if(val=='Swed'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/SE.png' height=120>";
	}
	else if(val=='Swit'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/CH.png' height=120>";
	}
	else if(val=='USA'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/US.png' height=120>";
	}
	else if(val=='Urua'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/UY.png' height=120>";
	}
}