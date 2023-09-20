function mostrarRango() {
    var fechaInicio = document.getElementById("fecha-inicio").value;
    var fechaFin = document.getElementById("fecha-fin").value;
    var bol=true
    if(
        fechaInicio=="" || fechaFin==""
    ){ Swal.fire({
        icon:'warning',
        title:'Por favor llene los campos',
    })
    bol=false
    }
    if(
        bol===true
    ){
        swal.fire("Fecha de inicio: " + fechaInicio + "\nFecha de fin: " + fechaFin);
    }
}

function mostrarAlerta(texto) {
    Swal.fire(
        'Informe descargado',
        'Revise la carpeta de descargas',
        'success'
      )
  }

  function mostrarGrafico() {
    // Datos del gráfico
    var datos = {
      labels: ['Inventario', 'Ventas', 'Deudores','Empleados'],
      datasets: [{
        data: [20, 50, 20, 10], // Valores de cada sección del gráfico
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56','#581845'] // Colores de cada sección
      }]
    };

    // Opciones del gráfico
    var opciones = {
      responsive: true
    };

    // Obtener el elemento canvas
    var canvas = document.getElementById('miGrafico');

    // Crear el gráfico circular
    var grafico = new Chart(canvas, {
      type: 'doughnut',
      data: datos,
      options: opciones
    });
  }
