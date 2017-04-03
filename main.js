var globals = {
	name: ''
};
var answers = {};
var answersmoeurs = {};
var count = 0;
var step = 0;
var stepmoeurs = 0;

// pour le test de français 
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

// pour l'entretien de moeurs 
$("input[data-good]").on("change", function() { 
	stepmoeurs++;
	// sélection de la réponse
	var name = $(this).attr('name');
	// on fait correspondre la réponse à 1 ou 0 
	answersmoeurs[name] = Number($(this).data('good'));
	// on ajoute 1 au compteur quand la réponse est bonne (ou 0 quand elle est fausse)
	count += Number(answersmoeurs[name]);
	// sélection de toutes les réponses "name", une fois qu'une est sélectionnée, les autres sont désactivées
	$("input[name=" + name + "]").prop("disabled", true);
	// est ce qu'on a fini ?
	if (stepmoeurs === 6) {
		var selector = count >= 6 ? '#win_ceremony' : '#loose_startagain';
		$('.see-results').removeClass('hidden');
		$('.see-results .btn').attr('href', selector);
	}
});