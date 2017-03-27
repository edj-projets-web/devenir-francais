var answers = {};
var count = 0;
var step = 0;

$("input[data-right]").on("change", function() { 
	step++;
	// sélection de la réponse
	var name = $(this).attr('name');
	// on fait correspondre la réponse à 1 ou 0 
	answers[name] = Number($(this).data('right')) === 1;
	// on ajoute 1 au compteur quand la réponse est bonne (ou 0 quand elle est fausse)
	count += Number(answers[name]);
	// sélection de toutes les réponses "name", une fois qu'une est sélectionnée, les autres sont désactivées
	$("input[name=" + name + "]").prop("disabled", true);
	// est ce qu'on a fini ?
	if (step === 3) {
		var selector = count >= 2 ? '#win' : '#loose';
		$('.see-results').removeClass('hidden');
		$('.see-results .btn').attr('href', selector);
	}
});