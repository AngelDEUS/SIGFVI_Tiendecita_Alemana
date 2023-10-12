
const matrizProductos = [
    ['ABC123', 'Chee-tris', 'Empaquetado', 40, 6, 1000, 1500, '2023-12-31', 'Activo'],
    ['XYZ456', 'Chee-tris Grande', 'Empaquetado', 80, 4, 200, 3000, '2023-10-15', 'Activo'],
    ['DEF789', 'Poker', 'Elatados', 450, 40, 1800, 2500, '2024-02-28', 'Activo'],
    ['GHI012', 'Ron Caldas', 'Enbotellado', 800, 8, 30000, 60000, '2023-11-30', 'Activo'],
    ['JKL345', 'Yogur', 'Lácteos', 200, 12, 1.80, 2.20, '2023-10-25', 'Activo'],
    ['MNO678', 'Vive 100', 'Enbotellado', 800, 15, 1200, 1900, '2024-03-15', 'Activo'],
    ['PQR901', 'Coca Cola Zero', 'Embotellado', 3000, 10, 4000, 5500, '2023-11-10', 'Activo'],
    ['STU234', 'Jack Daniels', 'Embotellado', 750, 5, 70000, 80000, '2024-01-20', 'Activo'],
    ['VWX567', 'Absolut Vodka', 'Embotellado', 700, 10, 38000, 45000, '2023-10-05', 'Activo'],
    ['YZA890', 'Maní Salado', 'Empaquetado', 150, 24, 1.20, 1.80, '2023-12-15', 'Activo']
];

function agregarProducto() {
    const productId = document.getElementById("productoid").value;
    const productUnits = parseFloat(document.getElementById("productUnits").value);

    if (isNaN(productUnits) || productUnits <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe ingresar una cantidad válida mayor que cero.',
        })
        return;
    }

    const product = buscarProductoPorId(productId);

    if (product) {
        const tableBody = document.getElementById("productTableBody");
        const newRow = document.createElement("tr");

        const precioVenta = parseFloat(product[6]);
        const subtotal = precioVenta * productUnits;

        newRow.innerHTML = `
                    <td>${product[0]}</td>
                    <td>${product[1]}</td>
                    <td>${product[2]}</td>
                    <td>${product[3]}</td>
                    <td>${product[4]}</td>
                    <td>${product[5]}</td>
                    <td data-precio="${precioVenta}">${precioVenta.toFixed(2)}</td>
                    <td>${product[7]}</td>
                    <td>${product[8]}</td>
                    <td data-unidades="${productUnits}">${productUnits.toFixed(2)}</td>
                    <td data-subtotal="${subtotal}">${subtotal.toFixed(2)}</td>
                `;

        tableBody.appendChild(newRow);

        actualizarResumen();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Producto no encontrado',
            footer: 'No puede estar vacio o es incorrecto el ID de producto'
        })
    }
}

function buscarProductoPorId(id) {
    for (const product of matrizProductos) {
        if (product[0] === id) {
            return product;
        }
    }
    return null;
}

function actualizarResumen() {
    const precioVentaCells = document.querySelectorAll("#productTableBody td[data-precio]");
    const unidadesCells = document.querySelectorAll("#productTableBody td[data-unidades]");
    const subtotalCells = document.querySelectorAll("#productTableBody td[data-subtotal]");

    let subtotalVenta = 0;

    for (let i = 0; i < precioVentaCells.length; i++) {
        const precioVenta = parseFloat(precioVentaCells[i].getAttribute("data-precio"));
        const unidades = parseFloat(unidadesCells[i].getAttribute("data-unidades"));
        const subtotal = precioVenta * unidades;

        subtotalCells[i].textContent = subtotal.toFixed(2);

        subtotalVenta += subtotal;
    }

    const iva = subtotalVenta * 0.19;
    const total = subtotalVenta + iva;

    const resumenRow = `
                <td>$ ${subtotalVenta.toFixed(2)}</td>
                <td>$ ${iva.toFixed(2)}</td>
                <td>$ ${total.toFixed(2)}</td>
            `;

    document.getElementById("summaryTableBody").innerHTML = resumenRow;
}