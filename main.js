
	nombre_peli_array = [];
	
	function submit()
	{
        
        var nombre_1 = document.getElementById("nombre_peli_1").value;
        var nombre_2 = document.getElementById("nombre_peli_2").value;
        var nombre_3 = document.getElementById("nombre_peli_3").value;
        var nombre_4 = document.getElementById("nombre_peli_4").value;

        nombre_peli_array.push(nombre_1);
        nombre_peli_array.push(nombre_2);
        nombre_peli_array.push(nombre_3);
        nombre_peli_array.push(nombre_4);

		console.log(nombre_peli_array);
		
        document.getElementById("ver_nombre").innerHTML = nombre_peli_array;
        document.getElementById("botón_enviar").style.display = "none";
        document.getElementById("botón_ordenar").style.display = "inline-block";

	}

function sorting()
{
	nombre_peli_array.sort();
    console.log(nombre_peli_array);
	document.getElementById("ver_nombre").innerHTML = nombre_peli_array;
}
