
		function showCity(){
			//alert(villeCourante); 
			console.log(villeCourante); 
			
			// 1. Récupérer la valeur courante du menu 
			// Pour ça on va faire :
			let VilleSelect = document.getElementById("vil-select").value;
			//var nomVilleSelectionnee = document.getElementById("vil-select").value;
			
			// 2. Récupérer la liste de toutes les div correspondant à une div de météo 
			// Pour ça on va faire :
			let cities = document.getElementsByClassName("city");

			// 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
			// TODO : definir l : la taille max de votre tableau cities
			//var l = cities.length;
			for (i=0; i<cities.length; i++) { 
			
				if (VilleSelect == ""){
					cities[i].style.display= "";
					
				}else{
				if (cities[i].id != VilleSelect) {
				   
				   // garder l'element visible -> ELEMENT.style.display= "none";
					cities[i].style.display= "none";
				} else {
				  // cacher l'element -> ELEMENT.style.display= "";
				  //cities.style.visibility= "hidden";
				  cities[i].style.display= "";
				}
				}
			
			}
		}
		let villeCourante = "Lyon";