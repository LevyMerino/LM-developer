CREATE database CfdiMX;

use CfdiMX;

CREATE TABLE Cat_Receptor 
(
    rId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    rRFC VARCHAR(20) NOT NULL,
    rRazonSocial VARCHAR(20) NOT NULL,
    rResidenciaFiscal VARCHAR(20),
    rNumRegIdTrib VARCHAR(20) NOT NULL,
    rUsoCFDI VARCHAR(20) NOT NULL,   
    rCalle VARCHAR(20),
    rNumeroInt VARCHAR(20),
    rNumeroExt VARCHAR(20),
    rColonia VARCHAR(20),
    rCiudad VARCHAR(20),
    rMunicipio VARCHAR(20),
    rEstado VARCHAR(20),
    rCodigoPostal VARCHAR(20),
    rTelefono VARCHAR(20),
);

CREATE TABLE Cat_Emisor(

    eId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    eRFC VARCHAR(20) NOT NULL,
    eRazonSocial VARCHAR(20) NOT NULL,
    eRegimenFiscal VARCHAR(20) NOT NULL,
    eCalle VARCHAR(20),
    eNumeroInt VARCHAR(20),
    eNumeroExt VARCHAR(20),
    eColonia VARCHAR(20),
    eCiudad VARCHAR(20),
    eMunicipio VARCHAR(20),
    eEstado VARCHAR(20),
    eCodigoPostal VARCHAR(20),
    eTelefono VARCHAR(20),
);

CREATE TABLE Dat_ContenidoFactura
(    
    cfId  INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    cfVersion VARCHAR (3) NOT NULL,
    cfSerie VARCHAR (20),
    cfFolio VARCHAR (20),
    cfFecha VARCHAR (20) NOT NULL,
    cfFormaPago VARCHAR (20),
    cfNoCertificado VARCHAR (20) NOT NULL,
    cfCondicionesPago VARCHAR (20),
    cfSubtotal VARCHAR (20) NOT NULL,
    cfDescuento VARCHAR (20),
    cfTipoMoneda VARCHAR (5) NOT NULL,
    cfTipoCambio VARCHAR (20) NOT NULL,            
    cfTotal VARCHAR (20) NOT NULL,
    cfTipoComprobante VARCHAR (2) NOT NULL,
    cfMetodoPago VARCHAR (20),
    cfLugarExpedcion VARCHAR (5) NOT NULL,
	eIdFk INT,
	rIdFk INT,
    CONSTRAINT FK_Cat_Emisor FOREIGN KEY (eIdFk)
    REFERENCES Cat_Emisor(eId),
    CONSTRAINT FK_Receptor FOREIGN KEY (rIdFk)
    REFERENCES Cat_Receptor(rId),

);

CREATE TABLE Cat_Conceptos
(
    cId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    cDescripcion VARCHAR (20) NOT NULL,
    cClaveProdServ VARCHAR (20) NOT NULL,
    cCantidad VARCHAR (20) NOT NULL,
    cValorUnitario VARCHAR (20) NOT NULL,
    cImporte VARCHAR (20) NOT NULL,
    cDescuento VARCHAR (20),
    cClaveUnidad VARCHAR (20) NOT NULL,
    cUnidad VARCHAR (20),
    cNoIdentificacion VARCHAR (20),
    citBase VARCHAR (20),
    citImpuesto VARCHAR (20),
    citTipoFactor VARCHAR (20),
    citTasaOCuota VARCHAR (20),
    citImporte VARCHAR (20),
	cfIdFk INT,
    CONSTRAINT FK_ContenidoFactura FOREIGN KEY (cfIdFk)
        REFERENCES Dat_ContenidoFactura(cfId),

);