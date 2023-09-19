Create database SIGFVI_BD_V2;


drop database SIGFVI_BD;
use SIGFVI_BD_V2;

-- ------------------------------------------------> Usuarios y Estados

create table Estado
(
	ID_Estado_PK TINYINT(20) auto_increment primary key,
    Nombre_Estado varchar(25) not null
);

create table Tipo_identificacion
(
	ID_Tipo_Identificacion_PK TINYINT(5) auto_increment primary key,
    Nombre_Identificacion varchar(45) not null
);

create table Tipo_Cargo
(
	ID_Tipo_Cargo_PK TINYINT(5) auto_increment primary key,
    Nombre_Tipo_cargo VARCHAR(45) not null,
    ID_Estado_FK TINYINT(20) not null,
    foreign key (ID_Estado_FK) references Estado(ID_Estado_PK)
);

create table Usuario 
(
    ID_Tipo_Identificacion_FK TINYINT(10) not null,
	ID_Numero_Identificacion_PK varchar(25) primary key not null,
    ID_Tipo_Cargo_FK TINYINT(5) not null,
    Primer_Nombre_Usuario varchar(45) not null,
    Segundo_Nombre_Usuario varchar(45),
    Primer_Apellido_Usuario varchar(45) not null,
    Segundo_Apellido_Usuario varchar(45),
    Numero_Contacto_Usuario varchar(10) not null,
    Email_Usuario varchar(45) not null,
    Contraseña_Usuario varchar(45) not null,
    ID_Estado_FK TINYINT(20) not null,
    foreign key (ID_Tipo_Identificacion_FK) references Tipo_identificacion(ID_Tipo_Identificacion_PK),
    foreign key (ID_Tipo_Cargo_FK) references Tipo_Cargo(ID_Tipo_Cargo_PK),
    foreign key (ID_Estado_FK) references Estado(ID_Estado_PK)
);

create table Cuenta_Deudor
(
	ID_Deudor_PK SMALLINT auto_increment primary key,
    Primer_Nombre VARCHAR(45) not null,
    Segundo_Nombre VARCHAR(45),
    Primer_Apellido VARCHAR(45) not null,
    Segundo_Apellido VARCHAR(45),
    Direccion_Deudor VARCHAR(100) not null,
    Telefono_Deudor VARCHAR(10) not null,
	ID_Estado_FK TINYINT(20) not null,
    foreign key (ID_Estado_FK) references Estado(ID_Estado_PK)
);

-- ------------------------------------------------> Modulo de Productos e Inventario
create table Tipo_Producto
(
	ID_Tipo_Producto_PK TINYINT(100) auto_increment primary key,
    Nombre_Tipo_Producto VARCHAR(45) not null
);

create table Registro_Proveedor
(
	ID_Registro_Proveedor_PK TINYINT(200) auto_increment primary key,
    Nombre_Empresa VARCHAR(45) not null,
    Fecha_Visita DATE not null,
    Telefono_Contacto VARCHAR(10) not null,
    ID_Estado_FK TINYINT(20) not null,
    foreign key (ID_Estado_FK) references Estado(ID_Estado_PK)
);

create table Producto
(
	ID_Producto_PK VARCHAR(20) primary key not null,
    ID_Tipo_Producto_FK TINYINT(100) not null,
	Nombre_Producto VARCHAR(25) not null, 
    Cantida_Neto_producto MEDIUMINT unsigned not null,
    Precio_Proveedor DECIMAL(11,2) unsigned not null,
    Precio_Venta DECIMAL(11,2) unsigned not null,
    Fecha_Vencimiento DATE not null,
    Foto_Producto VARCHAR(255) not null,
    ID_Registro_Proveedor_FK TINYINT(200) not null,
    ID_Estado_FK TINYINT(20) not null,
    foreign key (ID_Tipo_Producto_FK) references Tipo_Producto(ID_Tipo_Producto_PK),
    foreign key (ID_Registro_Proveedor_FK) references Registro_Proveedor(ID_Registro_Proveedor_PK),
    foreign key (ID_Estado_FK) references Estado(ID_Estado_PK)
);

create table Inventario
(
	ID_Inventario_PK TINYINT(20) auto_increment primary key,
    ID_Producto_FK VARCHAR(20) not null,
	ID_Estado_FK TINYINT(20) not null,
    Stock INT unsigned not null,
	foreign key (ID_Producto_FK) references Producto(ID_Producto_PK),
	foreign key (ID_Estado_FK) references Estado(ID_Estado_PK)
);

-- ------------------------------------------------> Modulo de Ventas y Facturacion
create table Metodo_Pago
(
	ID_Metodo_Pago INT auto_increment primary key,
    Nombre_Metodo VARCHAR(45) not null
);

create table Pedido
(
	ID_Pedido_PK INT auto_increment primary key,
	Fecha_Hora_Pedido DAtE not null,
    Total_Pedido INT not null,
    ID_Metodo_Pago_FK INT not null,
	ID_Estado_FK TINYINT(20) not null,
    ID_Inventario_FK TINYINT(20) not null,
    foreign key (ID_Metodo_Pago_FK) references Metodo_Pago(ID_Metodo_Pago),
    foreign key (ID_Estado_FK) references Estado(ID_Estado_PK),
    foreign key (ID_Inventario_FK) references Inventario(ID_Inventario_PK)
);

create table Detalle_Pedido
(
	ID_Detalle_Pedido_PK INT auto_increment primary key,
    Cantidad_Producto INT not null,
    Pedido_ID_Pedido_FK INT not null,
    ID_Producto_FK VARCHAR(20) not null,
    foreign key (Pedido_ID_Pedido_FK) references Pedido(ID_Pedido_PK),
    foreign key (ID_Producto_FK) references Producto(ID_Producto_PK)
);

create table Saldo_Cuenta_Deudor
(
	ID_Saldo_PK INT auto_increment primary key,
    Fecha_Cancelacion_Pedido DATE not null,
    Total_Saldo_Deuda INT not null,
    ID_Pedido_FK INT not null,
    ID_Deudor_FK SMALLINT not null,
    ID_Estado_Pedido_FK TINYINT(20) not null,
    foreign key (ID_Pedido_FK) references Pedido(ID_Pedido_PK),
    foreign key (ID_Deudor_FK) references Cuenta_Deudor(ID_Deudor_PK),
    foreign key (ID_Estado_Pedido_FK) references Pedido(ID_Estado_FK)
);

create table Venta_Realizada
(
	ID_Venta_Realizada_PK INT auto_increment primary key,
    IVA TINYINT(30) not null,
    Total_Venta float(24) not null,
    ID_Pedido_FK INT not null,
    Pedido_ID_Estado_FK TINYINT(20) not null,
    ID_Saldo_FK INT not null,
    foreign key (ID_Pedido_FK) references Pedido(ID_Pedido_PK),
    foreign key (Pedido_ID_Estado_FK) references Pedido(ID_Estado_FK),
    foreign key (ID_Saldo_FK) references Saldo_Cuenta_Deudor(ID_Saldo_PK)
);

create table Facturacion
(
	ID_Factura_PK INT auto_increment primary key,
    Fecha_Hora_Factura DATETIME(6),
    ID_Venta_Realizada_FK INT not null,
    foreign key (ID_Venta_Realizada_FK) references Venta_Realizada(ID_Venta_Realizada_PK)
);
-- ------------------------------------------------> Modulo de informes

create table Tipo_Informe_Empleado
(
	id_Tipo_Informe_Empleado INT auto_increment primary key,
    ID_Numero_Identificacion_PK VARCHAR(25) not null,
    ID_Tipo_Cargo_FK TINYINT(5) not null,
    foreign key (ID_Numero_Identificacion_PK) references Usuario(ID_Numero_Identificacion_PK),
    foreign key (ID_Tipo_Cargo_FK) references Usuario(ID_Tipo_Cargo_FK)
);

create table Tipo_Informe_Venta
(
	ID_Informe_Venta_Pk INT auto_increment primary key,
    Facturacion_ID_Factura_FK INT not null,
    Fecha_Inicial DATE,
    Fecha_Final DATE,
    foreign key (Facturacion_ID_Factura_FK) references Facturacion(ID_Factura_PK)
);

create table Tipo_Informe_Cuenta_Deudor
(
	ID_Tipo_Informe_Cuenta_Deudor_PK INT auto_increment primary key,
    ID_Deudor_FK SMALLINT not null,
    ID_Estado_Cuenta_Deudor_FK TINYINT(20) not null,
    ID_Saldo_FK INT not null,
    foreign key (ID_Deudor_FK) references Cuenta_Deudor(ID_Deudor_PK),
    foreign key (ID_Estado_Cuenta_Deudor_FK) references Cuenta_Deudor(ID_Estado_FK),
    foreign key (ID_Saldo_FK) references Saldo_Cuenta_Deudor(ID_Saldo_PK)
);

