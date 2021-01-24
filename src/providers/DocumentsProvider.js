import React, { createContext, useState } from 'react';

export const DocumentsContext = createContext();

export const DocumentsProvider = (props) => {

    const [documents, setDocuments] = useState({
        "documents" : [
            {
                "name" : "Contract de vanzare cumparare (RO)",
                "id" : "0",
                "folder" : "Acte",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerZipCode",
                        "fieldLabel" : "Cod poștal proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș/comună proprietar"
                    },
                    {
                        "fieldName" : "ownerSector",
                        "fieldLabel" : "Sector/sat proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerSeries",
                        "fieldLabel" : "Serie buletin proprietar"
                    },
                    {
                        "fieldName" : "ownerNumber",
                        "fieldLabel" : "Număr buletin proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalCounty",
                        "fieldLabel" : "Județ domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalZip",
                        "fieldLabel" : "Cod poștal domiciul fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalCity",
                        "fieldLabel" : "Oraș/Comună domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalSector",
                        "fieldLabel" : "Sector/Sat domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalStreet",
                        "fieldLabel" : "Stradă domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalStreetNr",
                        "fieldLabel" : "Număr strada domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalBl",
                        "fieldLabel" : "Bloc domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalSc",
                        "fieldLabel" : "Scară domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalEt",
                        "fieldLabel" : "Etaj domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerFiscalAp",
                        "fieldLabel" : "Apartament domiciliu fiscal proprietar"
                    },
                    {
                        "fieldName" : "ownerJuridicName",
                        "fieldLabel" : "Nume reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "ownerJuridicSeries",
                        "fieldLabel" : "Serie buletin reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "ownerJuridicNumber",
                        "fieldLabel" : "Număr buletin reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "ownerJuridicCIF",
                        "fieldLabel" : "CNP reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "ownerJuridicTel",
                        "fieldLabel" : "Telefon reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "ownerJuridicEmail",
                        "fieldLabel" : "Email reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "ownerJuridicPosition",
                        "fieldLabel" : "Calitate reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "buyerName",
                        "fieldLabel" : "Denumire cumpărător"
                    },
                    {
                        "fieldName" : "buyerCounty",
                        "fieldLabel" : "Județ cumpărător"
                    },
                    {
                        "fieldName" : "buyerZipCode",
                        "fieldLabel" : "Cod poștal cumpărător"
                    },
                    {
                        "fieldName" : "buyerCity",
                        "fieldLabel" : "Oraș/comună cumpărător"
                    },
                    {
                        "fieldName" : "buyerSector",
                        "fieldLabel" : "Sector/sat cumpărător"
                    },
                    {
                        "fieldName" : "buyerStreet",
                        "fieldLabel" : "Stradă cumpărător"
                    },
                    {
                        "fieldName" : "buyerStreetNr",
                        "fieldLabel" : "Număr stradă cumpărător"
                    },
                    {
                        "fieldName" : "buyerBl",
                        "fieldLabel" : "Bloc cumpărător"
                    },
                    {
                        "fieldName" : "buyerSc",
                        "fieldLabel" : "Scară cumpărător"
                    },
                    {
                        "fieldName" : "buyerEt",
                        "fieldLabel" : "Etaj cumpărător"
                    },
                    {
                        "fieldName" : "buyerAp",
                        "fieldLabel" : "Apartament cumpărător"
                    },
                    {
                        "fieldName" : "buyerSeries",
                        "fieldLabel" : "Serie buletin cumpărător"
                    },
                    {
                        "fieldName" : "buyerNumber",
                        "fieldLabel" : "Număr cumpărător"
                    },
                    {
                        "fieldName" : "buyerCNP",
                        "fieldLabel" : "CNP/CUI cumpărător"
                    },
                    {
                        "fieldName" : "buyerTel",
                        "fieldLabel" : "Telefon cumpărător"
                    },
                    {
                        "fieldName" : "buyerEmail",
                        "fieldLabel" : "Email cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalCounty",
                        "fieldLabel" : "Județ domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalZip",
                        "fieldLabel" : "Cod poștal domiciul fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalCity",
                        "fieldLabel" : "Oraș/Comună domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalSector",
                        "fieldLabel" : "Sector/Sat domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalStreet",
                        "fieldLabel" : "Stradă domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalStreetNr",
                        "fieldLabel" : "Număr strada domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalBl",
                        "fieldLabel" : "Bloc domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalSc",
                        "fieldLabel" : "Scară domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalEt",
                        "fieldLabel" : "Etaj domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerFiscalAp",
                        "fieldLabel" : "Apartament domiciliu fiscal cumpărător"
                    },
                    {
                        "fieldName" : "buyerJuridicName",
                        "fieldLabel" : "Nume reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "buyerJuridicSeries",
                        "fieldLabel" : "Serie buletin reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "buyerJuridicNumber",
                        "fieldLabel" : "Număr buletin reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "buyerJuridicCIF",
                        "fieldLabel" : "CNP reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "buyerJuridicTel",
                        "fieldLabel" : "Telefon reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "buyerJuridicEmail",
                        "fieldLabel" : "Email reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "buyerJuridicPosition",
                        "fieldLabel" : "Calitate reprezentat persoană juridică"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyMotorSeries",
                        "fieldLabel" : "Serie motor vehicul"
                    },
                    {
                        "fieldName" : "propertyCapacity",
                        "fieldLabel" : "Capaitate motor vehicul"
                    },
                    {
                        "fieldName" : "propertyMaxWeight",
                        "fieldLabel" : "Greutate maximă admisă vehicul (tone)"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyITPdate",
                        "fieldLabel" : "Dată la care expiră ITP vehicul"
                    },
                    {
                        "fieldName" : "propertyIDnumber",
                        "fieldLabel" : "Numărul cărţii de identitate a vehiculului "
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyEuro",
                        "fieldLabel" : "Normă EURO vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul"
                    },
                    {
                        "fieldName" : "propertyPriceDigits",
                        "fieldLabel" : "Prețul în cifre vehicul (lei)"
                    },
                    {
                        "fieldName" : "propertyPriceLetters",
                        "fieldLabel" : "Prețul în litere vehicul"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                    {
                        "fieldName" : "documentPlace",
                        "fieldLabel" : "Locul realizării documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cererea de înmatriculare",
                "id" : "1",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cererea de înmatriculare temporară",
                "id" : "2",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de transcrierea transmiterii dreptului de proprietate",
                "id" : "3",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de eliberarea unui duplicat al certificatului de înmatriculare",
                "id" : "4",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de eliberarea unui nou certificat ca urmare a modificării datelor înscrise",
                "id" : "5",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de radiere",
                "id" : "6",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de autorizarea provizorie pentru o perioadă",
                "id" : "7",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                    {
                        "fieldName" : "autorizationsProvizoryDays",
                        "fieldLabel" : "Perioada de zile pentru autorizarea provizorie"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de duplicat placă nr. înmatriculare/placă suplimentară",
                "id" : "8",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                    {
                        "fieldName" : "platesNumberDuplicateDays",
                        "fieldLabel" : "Numărul de bucăți duplicate nr înmatriculare"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de păstrarea combinației numărului de înmatriculare",
                "id" : "9",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerCity",
                        "fieldLabel" : "Oraș proprietar"
                    },
                    {
                        "fieldName" : "ownerStreet",
                        "fieldLabel" : "Stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerStreetNr",
                        "fieldLabel" : "Număr stradă proprietar"
                    },
                    {
                        "fieldName" : "ownerBl",
                        "fieldLabel" : "Bloc proprietar"
                    },
                    {
                        "fieldName" : "ownerSc",
                        "fieldLabel" : "Scară proprietar"
                    },
                    {
                        "fieldName" : "ownerEt",
                        "fieldLabel" : "Etaj proprietar"
                    },
                    {
                        "fieldName" : "ownerAp",
                        "fieldLabel" : "Apartament proprietar"
                    },
                    {
                        "fieldName" : "ownerCounty",
                        "fieldLabel" : "Județ Proprietar"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "propertyMark",
                        "fieldLabel" : "Marcă vehicul"
                    },
                    {
                        "fieldName" : "propertyType",
                        "fieldLabel" : "Tip vehicul"
                    },
                    {
                        "fieldName" : "propertyVIN",
                        "fieldLabel" : "Serie de identificare vehicul"
                    },
                    {
                        "fieldName" : "propertyBornYear",
                        "fieldLabel" : "Anul de fabricație vehicul"
                    },
                    {
                        "fieldName" : "propertyPlatesNumber",
                        "fieldLabel" : "Număr de înmatriculare vehicul"
                    },
                    {
                        "fieldName" : "propertyBuyDate",
                        "fieldLabel" : "Data cumpărării vehicul de către actualul proprietar"
                    },
                    {
                        "fieldName" : "propertyActEx",
                        "fieldLabel" : "Nume proprietar anterior vehicul"
                    },
                    {
                        "fieldName" : "propertyAct",
                        "fieldLabel" : "Tipul cumpărării vehicul de la proprietarul anterior (cumpărare, moștenire etc)"
                    },
                    {
                        "fieldName" : "anotherLegalName",
                        "fieldLabel" : "Nume persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "anotherLegalCNP",
                        "fieldLabel" : "CNP/CUI persoană care poate folosi vehiculul (altul decât proprietarul)"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                ],
                "selected" : false
            } ,
            {
                "name" : "Cerere de restituire taxe",
                "id" : "10",
                "folder" : "cerere",
                "fields" : [
                    {
                        "fieldName" : "ownerName",
                        "fieldLabel" : "Denumire proprietar"
                    },
                    {
                        "fieldName" : "ownerCNP",
                        "fieldLabel" : "CNP/CUI proprietar"
                    },
                    {
                        "fieldName" : "ownerSeries",
                        "fieldLabel" : "Serie buletin proprietar"
                    },
                    {
                        "fieldName" : "ownerNumber",
                        "fieldLabel" : "Număr buletin proprietar"
                    },
                    {
                        "fieldName" : "ownerFullAddress",
                        "fieldLabel" : "Adresa completa a proprietarului"
                    },
                    {
                        "fieldName" : "taxRefundPrice",
                        "fieldLabel" : "Suma care trebuie restituita"
                    },
                    {
                        "fieldName" : "taxRefundPaid",
                        "fieldLabel" : "Suma a fost achitată cu .."
                    },
                    {
                        "fieldName" : "taxRefundDate",
                        "fieldLabel" : "Suma a fost achitată la data de .."
                    },
                    {
                        "fieldName" : "taxRefundName",
                        "fieldLabel" : "Suma a fost achitată în numele .."
                    },
                    {
                        "fieldName" : "taxRefundIBAN",
                        "fieldLabel" : "Doresc ca suma să fie restituită în IBAN RO.. (opțional)"
                    },
                    {
                        "fieldName" : "taxRefundBank",
                        "fieldLabel" : "Cont deschis la banca ..(opțional)"
                    },
                    {
                        "fieldName" : "taxRefundBankOwner",
                        "fieldLabel" : "Titular de cont ..(opțional)"
                    },
                    {
                        "fieldName" : "ownerEmail",
                        "fieldLabel" : "Email proprietar"
                    },
                    {
                        "fieldName" : "ownerTel",
                        "fieldLabel" : "Telefon proprietar"
                    },
                    {
                        "fieldName" : "documentDate",
                        "fieldLabel" : "Data documentului"
                    },
                
                ],
                "selected" : false
            } 
        ]
    });

    return (
        <DocumentsContext.Provider value={[documents, setDocuments]}>{props.children}</DocumentsContext.Provider>
    );
}

// export default DocumentsProvider;