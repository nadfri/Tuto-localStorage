const local = JSON.parse(localStorage.getItem("user"));

if(local != null)
    h1.textContent = `Bonjour ${local.nom}, tu as bien ${local.age} ans!`