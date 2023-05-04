document.addEventListener('DOMContentLoaded', () => {
    const animatedDiv = document.querySelector('.col-6');

    const animation = animatedDiv.animate([
        { opacity: 0, transform: 'translateY(-400px)' }, // estado inicial
        { opacity: 1, transform: 'translateY(0)' }     // estado final
    ], {
        duration: 1000, // duración de la animación en milisegundos
        easing: 'ease-out' // tipo de interpolación
    });
});



window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":"Chatea con nosotros"};
(function(d,t) {
  var BASE_URL="https://chatwoot.cloudesk.com.co";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: '7oNhoGXW3fszzRbP8cHd5swr',
      baseUrl: BASE_URL
    })
  }
})(document,"script");





  function actualizarCodigoTelefono() {
    const paises = document.getElementById('paises');
    const codigoTelefono = document.getElementById('codigoTelefono');
    const paisSeleccionado = paises.options[paises.selectedIndex].value;

    const codigosTelefonicos = {
      'Argentina': '+54',
      'Bolivia': '+591',
      'Brasil': '+55',
      // ... (otros códigos de teléfono) ...
    };

    if (codigosTelefonicos[paisSeleccionado]) {
      codigoTelefono.value = codigosTelefonicos[paisSeleccionado];
    } else {
      codigoTelefono.value = '';
    }
  }




  var popupLink = document.getElementById('popup-link');
var popup = document.getElementById('popup');

popupLink.addEventListener('click', function(event) {
  event.preventDefault();
  popup.style.display = 'block';
});

popup.addEventListener('click', function(event) {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
});

function actualizarCodigoTelefono() {
  const pais = document.getElementById("paises").value;
  const codigoTelefono = document.getElementById("codigoTelefono");
  switch (pais) {
    case "Argentina":
      codigoTelefono.innerHTML = `
        <option value="+54">+54</option>
      `;
      break;
    case "Bolivia":
      codigoTelefono.innerHTML = `
        <option value="+591">+591</option>
      `;
      break;
    case "Brasil":
      codigoTelefono.innerHTML = `
        <option value="+55">+55</option>
      `;
      break;
    case "Chile":
      codigoTelefono.innerHTML = `
        <option value="+56">+56</option>
      `;
      break;
    case "Colombia":
      codigoTelefono.innerHTML = `
        <option value="+57">+57</option>
      `;
      break;
    case "Costa Rica":
      codigoTelefono.innerHTML = `
        <option value="+506">+506</option>
      `;
      break;
      case "Ecuador":
      codigoTelefono.innerHTML = `
        <option value="+593">+593</option>
      `;
      break;
    case "El Salvador":
      codigoTelefono.innerHTML = `
        <option value="+503">+503</option>
      `;
      break;
    case "España":
      codigoTelefono.innerHTML = `
        <option value="+34">+34</option>
      `;
      break;
    case "Estados Unidos":
      codigoTelefono.innerHTML = `
        <option value="+1">+1</option>
      `;
      break;
    case "Guatemala":
      codigoTelefono.innerHTML = `
        <option value="+502">+502</option>
      `;
      break;
    case "Honduras":
      codigoTelefono.innerHTML = `
        <option value="+504">+504</option>
      `;
      break;
    case "México":
      codigoTelefono.innerHTML = `
        <option value="+52">+52</option>
      `;
      break;
    case "Nicaragua":
      codigoTelefono.innerHTML = `
        <option value="+505">+505</option>
      `;
      break;
    case "Panamá":
      codigoTelefono.innerHTML = `
        <option value="+507">+507</option>
      `;
      break;
    case "Paraguay":
      codigoTelefono.innerHTML = `
        <option value="+595">+595</option>
      `;
      break;
    case "Perú":
      codigoTelefono.innerHTML = `
        <option value="+51">+51</option>
      `;
      break;
    case "Puerto Rico":
      codigoTelefono.innerHTML = `
        <option value="+1">+1</option>
      `;
      break;
    case "República Dominicana":
      codigoTelefono.innerHTML = `
        <option value="+1">+1</option>
      `;
      break;
    case "Uruguay":
      codigoTelefono.innerHTML = `
        <option value="+598">+598</option>
      `;
      break;
    case "Venezuela":
      codigoTelefono.innerHTML = `
        <option value="+58">+58</option>
      `;
      break;
    default:
      codigoTelefono.innerHTML = `
        <option selected disabled value="">Código</option>
      `;
      break;
  }
}