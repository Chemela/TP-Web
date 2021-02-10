
		function showCity(){
			console.log(villeCourante); 
			
			// 1. Récupérer la valeur courante du menu 
			// Pour ça on va faire :
			let nomVilleSelectionnee = document.getElementById("vil-select").value;
			//var nomVilleSelectionnee = document.getElementById("vil-select").value;
			
			// 2. Récupérer la liste de toutes les div correspondant à une div de météo 
			// Pour ça on va faire :
			let cities = document.getElementsByClassName("city");

			// 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
			// TODO : definir l : la taille max de votre tableau cities
			var l = cities.length;
			for (i=0; i<l; i++) {
				if (cities[i].id == nomVilleSelectionnee) {
				  // garder l'element visible -> ELEMENT.style.display= "none";
				  id.style.display= "block";
				} else {
				  // cacher l'element -> ELEMENT.style.display= "";
				  //cities.style.visibility= "hidden";
				  id.style.display= "none";
				}
			}
		}
		let villeCourante = "Lyon";