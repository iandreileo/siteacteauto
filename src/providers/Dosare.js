import React, { createContext, useState } from 'react';
export const FilesContext = createContext();

export const FilesProvider = (props) => {
    const [files, setFiles] = useState({
    "dosare": [
        {
            "name": "Documente necesare pentru eliberarea unui nou certificat de înmatriculare când se modifică date despre proprietar (nume, domiciliu, etc.)",
            "necesare": [
                {
                    "name": "Cerere de eliberarea unui nou certificat ca urmare a modificării datelor înscrise",
                    "idGenerabil": "5",
                    "isGenerabil": true
                },
                {
                    "name": "certificat de atestare fiscală emis de organul fiscal competent teritorial, în cazul schimbării domiciliului, sediului sau reședinței în cazul persoanelor fizice cu domiciliul în străinătate",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Certificatul de înmatriculare în original",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Plăcuțele cu numărul de înmatriculare și dovada de plată a contravalorii celor noi și după caz, a tarifului legal de atribuire a unei combinații preferențiale a numărului de înmatriculare - în cazul solicitării atribuirii unui alt număr de înmatriculare. Plata se face prin internet banking, virament bancar, mandat poștal în contul trezoreriei statului (vezi lista conturi - unitati teritoriale) sau numerar la ghișeu odată cu depunerea documentelor",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA), încheiat pe numele proprietarului vehiculului, în termenul de valabilitate al acestuia",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada achitării contravalorii certificatului de înmatriculare – 49 lei ",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se vor prezenta actul de identitate sau, după caz, documente care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie, precum şi documentul care să ateste dreptul legal în virtutea căruia persoana poate folosi vehiculul, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "_id": 0
        },
        {
            "name": "Păstrarea combinației numărului de înmatriculare",
            "necesare": [
                {
                    "name": "Cerere de păstrarea combinației numărului de înmatriculare",
                    "idGenerabil": "9",
                    "isGenerabil": true
                },
                {
                    "name": "Actul de identitate al solicitantului sau documentele care atestă dobândirea personalității juridice, denumirea și sediul persoanei juridice, în original și copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada achitării tarifului de păstrare a combinației numărului de înmatriculare - 30 lei",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 1
        },
        {
            "name": "Documente necesare pentru eliberarea unui nou certificat de înmatriculare când se modifica date despre vehicul (serie şasiu, culoare, serie C.I.V. etc.)",
            "necesare": [
                {
                    "name": "Cerere de eliberarea unui nou certificat ca urmare a modificării datelor înscrise",
                    "idGenerabil": "5",
                    "isGenerabil": true
                },
                {
                    "name": "certificat de atestare fiscală emis de organul fiscal competent teritorial, în cazul schimbării motorului cu unul care are o capacitate cilindrică diferită, sau modificării altor date în baza cărora se calculează impozitul pe mijloace de transport",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului cu modificările tehnice operate de Regia Autonomă Registrul Auto Român, în original",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Certificatul de înmatriculare în original",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA) în termenul de valabilitate",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada achitării contravalorii certificatului de înmatriculare – 49 lei ",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 2
        },
        {
            "name": "Documente necesare pentru eliberarea unei autorizaţii de circulaţie provizorie",
            "necesare": [
                {
                    "name": "Cerere de autorizarea provizorie pentru o perioadă",
                    "idGenerabil": "7",
                    "isGenerabil": true
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA), încheiat pe numele proprietarului vehiculului, în termenul de valabilitate al acestuia;",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Documentul care atestă dreptul de proprietate al solicitantului asupra vehiculului, în original și în copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Documentele de înmatriculare eliberate de autoritățile străine în cazul vehiculului care a mai fost înmatriculat în alt stat, în original și în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada plăţii contravalorii autorizaţiei de circulaţie provizorie -13 lei .",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada plăţii contravalorii plăcuţelor cu număr provizoriu",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Copia declarației vamale, după caz, pentru vehiculele achiziţionate din afara UE, pentru care se solicită autorizarea de circulaţie provizorie pentru o perioadă mai mare de 30 de zile sau pentru perioade care, cumulate, depăşesc 30 de zile.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 3
        },
        {
            "name": "Documente necesare pentru eliberarea unui nou certificat de înmatriculare când certificatul de înmatriculare a fost deteriorat",
            "necesare": [
                {
                    "name": "Cerere de eliberarea unui duplicat al certificatului de înmatriculare",
                    "idGenerabil": "4",
                    "isGenerabil": true
                },
                {
                    "name": "Certificatul de înmatriculare deteriorat",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada achitării contravalorii certificatului de înmatriculare – 49 lei ",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Actul de identitate al solicitantului în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 4
        },
        {
            "name": "Documente necesare pentru eliberarea unui nou certificat de înmatriculare când certificatul de înmatriculare a fost furat",
            "necesare": [
                {
                    "name": "Cerere de eliberarea unui duplicat al certificatului de înmatriculare",
                    "idGenerabil": "4",
                    "isGenerabil": true
                },
                {
                    "name": "Declaraţia solicitantului din care să rezulte furtul documentului",
                    "idGenerabil":"-1",
                    "isGenerabil":false
                },
                {
                    "name":"Dovada achitării contravalorii certificatului de înmatriculare – 49 lei",
                    "idGenerabil":"-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 5
        },
        {
            "name": "Documente necesare pentru eliberarea unui nou certificat de înmatriculare când certificatul de înmatriculare a fost pierdut",
            "necesare": [
                {
                    "name": "Cerere de eliberarea unui duplicat al certificatului de înmatriculare",
                    "idGenerabil": "4",
                    "isGenerabil": true
                },
                {
                    "name": "Declaraţia solicitantului din care să rezulte pierderea",
                    "idGenerabil":"-1",
                    "isGenerabil":false
                },
                {
                    "name":"Dovada achitării contravalorii certificatului de înmatriculare – 49 lei",
                    "idGenerabil":"-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 5
        },
        {
            "name": "Vehicul achiziţionat din România şi este înmatriculat în Bucureşti sau alt judeţ (transcriere)",
            "necesare" : [
                {
                    "name": "Cerere de transcrierea transmiterii dreptului de proprietate",
                    "idGenerabil": "3",
                    "isGenerabil": true
                },
                {
                    "name" : "Dovada înregistrării în evidențele organului fiscal al autorității publice locale în a cărui rază de competență proprietarul (sau utilizatorul în cazul vehiculelor care fac obiectul unui contract de leasing financiar) își are domiciliul, sediul ori reședința în cazul persoanelor fizice cu domiciliul în străinătate. Aceasta constă în înscrierea numărului de înregistrare în Registrul de evidenţă a mijloacelor de transport supuse înmatriculării/înregistrării, pe actul de înstrăinare-dobândire",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada plăţii contravalorii certificatului de înmatriculare - 49 lei",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name" : "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se vor prezenta actul de identitate sau, după caz, documente care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Procura specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât proprietarul vehiculului.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA), încheiat pe numele proprietarului vehiculului, în termenul de valabilitate al acestuia",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Documentul care atestă dreptul de proprietate al solicitantului în forma prevăzută de lege la data dobândirii dreptului de proprietate, în original şi în copie, înregistrat în Registrul de evidență a mijloacelor de transport supuse înmatriculării/înregistrării în România, instituit la nivelul organului fiscal local",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se va prezenta şi documentul care să ateste dreptul legal în virtutea căruia persoana poate folosi vehiculul, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În cazul în care vehiculul este folosit în sistem leasing se poate prezenta un extras din contractul de leasing, care să conţină cel puţin părţile, obiectul şi durata contractului, datele de identificare ale vehiculului şi semnăturile părţilor, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Cartea de identitate a vehiculului, în original şi copie;",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada efectuării inspecţiei tehnice periodice, în termenul de valabilitate a acesteia",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Certificatul de înmatriculare emis pe numele fostului proprietar;",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare, inclusiv în situația în care combinația numărului de înmatriculare a fost păstrată de fostul proprietar. Acestea se restituie pe loc solicitantului, când se transferă automat noului proprietar, precum și în situația în care fostul proprietar a optat pentru păstrarea combinației numărului de înmatriculare, numai dacă îndeplinesc cerințele impuse de standardele în vigoare, iar combinația numărului de înmatriculare nu a fost restricționată conform legii.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare a cărui combinație a fost păstrată anterior de către solicitant, în măsura în care acesta intenționează atribuirea combinației păstrate, cu ocazia transcrierii transmiterii dreptului de proprietate. Acestea se restituie pe loc solicitantului numai dacă îndeplinesc cerințele impuse de standardele în vigoare, iar combinația numărului de înmatriculare nu a fost restricționată conform legii.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada plăţii contravalorii plăcuţelor cu numărul de înmatriculare (cu excepţia cazului în care acestea se transferă automat noului proprietar, sau a cazului în care acesta solicită atribuirea unei combinații a numărului de înmatriculare păstrate anterior) Plata se face prin internet banking, virament bancar, mandat poștal în contul trezoreriei statului (vezi lista conturi - unitati teritoriale) sau numerar la ghișeu odată cu depunerea documentelor",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                }
            ],
            "id": 6
        },
        {
            "name": "Documente necesare pentru radierea unui autovehicul din circulație în cazul în cazul declarării furtului vehiculului",
            "necesare" : [
                {
                    "name": "Cerere de radiere",
                    "idGenerabil": "6",
                    "isGenerabil":  true
                },
                {
                    "name": "Documentul emis de poliţie care atestă furtul în ţară sau străinătate",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de înmatriculare - original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Cartea de identitate a vehiculului în original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de atestare fiscală",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de radiere – 3 exemplare",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul radierii vehiculelor înmatriculate anterior datei de 1 iulie 1993, care dețin certificate de înmatriculare și numere de înmatriculare modele vechi sau care au o vechime de fabricație mai mare de 30 de ani, radierea se poate efectua în baza unei declarații pe proprie răspundere a titularului sau a moștenitorilor legali ai acestuia, care să ateste că vehiculul a fost dezmembrat sau retras definitiv din circulație și nu mai circulă pe drumurile publice.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                }
            ],
            "id": 7
        },
        {
            "name": "Documente necesare radierii unui vehicul din circulație, la cerere, în cazul în care deţinătorul nu mai doreşte menţinerea vehiculului în circulaţie",
            "necesare" : [
                {
                    "name": "Cerere de radiere",
                    "idGenerabil": "6",
                    "isGenerabil":  true
                },
                {
                    "name": "Dovada depozitării acestuia într-un spațiu adecvat, deținut în condițiile legii",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de înmatriculare - original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului în original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de atestare fiscală",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de radiere – 3 exemplare",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul radierii vehiculelor înmatriculate anterior datei de 1 iulie 1993, care dețin certificate de înmatriculare și numere de înmatriculare modele vechi sau care au o vechime de fabricație mai mare de 30 de ani, radierea se poate efectua în baza unei declarații pe proprie răspundere a titularului sau a moștenitorilor legali ai acestuia, care să ateste că vehiculul a fost dezmembrat sau retras definitiv din circulație și nu mai circulă pe drumurile publice.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                }
            ],
            "id": 8
        },
        {
            "name": "Documente necesare pentru radierea unui autovehicul din circulație când vehiculul a fost dezmembrat, casat sau predat unei unităţi specializate, în vederea dezmembrării",
            "necesare" : [
                {
                    "name": "Cerere de radiere",
                    "idGenerabil": "6",
                    "isGenerabil":  true
                },
                {
                    "name": "Documentul care atestă dezmembrarea, casarea sau predarea unei unităţi specializate în vederea dezmembrării (certificate de distrugere);",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de înmatriculare - original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului în original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de atestare fiscală",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de radiere – 3 exemplare",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul radierii vehiculelor înmatriculate anterior datei de 1 iulie 1993, care dețin certificate de înmatriculare și numere de înmatriculare modele vechi sau care au o vechime de fabricație mai mare de 30 de ani, radierea se poate efectua în baza unei declarații pe proprie răspundere a titularului sau a moștenitorilor legali ai acestuia, care să ateste că vehiculul a fost dezmembrat sau retras definitiv din circulație și nu mai circulă pe drumurile publice.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Radierea unui vehicul dezmembrat poate fi efectuată și din oficiu, în baza notificării primite de la autorități competente sau operatori economici autorizați să emită certificatul de distrugere, care atestă faptul că vehiculul a fost definitiv scos din uz.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 9
        },
        {
            "name": "Documente necesare pentru radierea unui autovehicul din circulație în cazul scoaterii definitive a vehiculului din România (export):",
            "necesare" : [
                {
                    "name": "Cerere de radiere",
                    "idGenerabil": "6",
                    "isGenerabil":  true
                },
                {
                    "name": "Documentul care atestă socaterea definitive a vehiculului din România",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de înmatriculare - original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului în original",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de atestare fiscală",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Certificatul de radiere – 3 exemplare",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "În cazul radierii vehiculelor înmatriculate anterior datei de 1 iulie 1993, care dețin certificate de înmatriculare și numere de înmatriculare modele vechi sau care au o vechime de fabricație mai mare de 30 de ani, radierea se poate efectua în baza unei declarații pe proprie răspundere a titularului sau a moștenitorilor legali ai acestuia, care să ateste că vehiculul a fost dezmembrat sau retras definitiv din circulație și nu mai circulă pe drumurile publice.",
                    "idGenerabil": "-1",
                    "isGenerabil":  false
                },
                {
                    "name": "Radierea unui vehicul scos definitiv din România poate fi efectuată și din oficiu, în baza notificării primite de la autorități competente, care atestă faptul că vehiculul a fost înmatriculat permanent în alt stat.Radierea unui vehicul scos definitiv din România poate fi efectuată și din oficiu, în baza notificării primite de la autorități competente, care atestă faptul că vehiculul a fost înmatriculat permanent în alt stat.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 10
        },
        {
            "name": "Vehicul achiziţionat din UE care a mai fost înmatriculat",
            "necesare": [
                {
                    "name": "Cererea de înmatriculare",
                    "idGenerabil": "1",
                    "isGenerabil": true
                },
                {
                    "name" : "Dovada înregistrării în evidențele organului fiscal al autorității publice locale în a cărui rază de competență proprietarul (sau utilizatorul în cazul vehiculelor care fac obiectul unui contract de leasing financiar) își are domiciliul, sediul ori reședința în cazul persoanelor fizice cu domiciliul în străinătate. Aceasta constă în înscrierea numărului de înregistrare în Registrul de evidenţă a mijloacelor de transport supuse înmatriculării/înregistrării, pe actul de înstrăinare-dobândire",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada plăţii contravalorii certificatului de înmatriculare - 49 lei",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name" : "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se vor prezenta actul de identitate sau, după caz, documente care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Procura specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât proprietarul vehiculului.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA), încheiat pe numele proprietarului vehiculului, în termenul de valabilitate al acestuia",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Documentul care atestă dreptul de proprietate al solicitantului în forma prevăzută de lege la data dobândirii dreptului de proprietate, în original şi în copie, înregistrat în Registrul de evidență a mijloacelor de transport supuse înmatriculării/înregistrării în România, instituit la nivelul organului fiscal local",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se va prezenta şi documentul care să ateste dreptul legal în virtutea căruia persoana poate folosi vehiculul, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În cazul în care vehiculul este folosit în sistem leasing se poate prezenta un extras din contractul de leasing, care să conţină cel puţin părţile, obiectul şi durata contractului, datele de identificare ale vehiculului şi semnăturile părţilor, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dacă persoana care a realizat achiziția intracomunitară a mijlocului de transport și solicită înmatricularea acestuia nu este înregistrată în scopuri de TVA conform art. 316 din Legea nr. 227/2015, cu modificările și completările ulterioare, pe lângă documentele prevăzute la alin. (1), aceasta trebuie să depună, după caz:Dacă persoana care a realizat achiziția intracomunitară a mijlocului de transport și solicită înmatricularea acestuia nu este înregistrată în scopuri de TVA conform art. 316 din Legea nr. 227/2015, cu modificările și completările ulterioare, pe lângă documentele prevăzute la alin. (1), aceasta trebuie să depună, după caz:  - formularul Certificat privind atestarea plății taxei pe valoarea adăugată, în cazul achizițiilor intracomunitare de mijloace de transport, emis de ANAF și prevăzut de Ordinul președintelului Agenției Naționale de Administrare Fiscală pentru aprobarea modelului și conținutului formularelor Certificat privind atestarea plății taxei pe valoarea adăugată, în cazul achizițiilor intracomunitare de mijloace de transport și Certificat, precum și a procedurii de eliberare a acestora SAU - formularul Certificat, emis de ANAF și prevăzut de Ordinul președintelui Agenției Naționale de Administrare Fiscală pentru aprobarea modelului și conținutului formularelor Certificat privind atestarea plății taxei pe valoarea adăugată, în cazul achizițiilor intracomunitare de mijloace de transport” și Certificat, precum și a procedurii de eliberare a acestora.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului, în original şi copie;",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Certificatul de autenticitate al vehiculului eliberat de Registrul Auto Român, cu excepţia autovehiculelor destinate competiţiilor sportive şi a vehiculelor istorice",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Documentele de înmatriculare eliberate de autorităţile străine, în original, precum şi plăcuţele străine cu numărul de înmatriculare",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare a cărui combinație a fost păstrată anterior de către solicitant, în măsura în care acesta intenționează atribuirea combinației păstrate, cu ocazia înmatriculării. Acestea se restituie pe loc solicitantului numai dacă îndeplinesc cerințele impuse de standardele în vigoare, iar combinația numărului de înmatriculare nu a fost restricționată conform legii.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada efectuării inspecţiei tehnice periodice, în termenul de valabilitate a acesteia",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada plăţii contravalorii plăcuţelor cu numărul de înmatriculare (cu excepţia cazului în care acestea se transferă automat noului proprietar, sau a cazului în care acesta solicită atribuirea unei combinații a numărului de înmatriculare păstrate anterior) Plata se face prin internet banking, virament bancar, mandat poștal în contul trezoreriei statului (vezi lista conturi - unitati teritoriale) sau numerar la ghișeu odată cu depunerea documentelor",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                }
            ],
            "id": 11
        },
        {
            "name": "Vehicul achiziționat din România sau dintr-un alt stat UE care nu a fost niciodată înmatriculat",
            "necesare": [
                {
                    "name": "Cererea de înmatriculare",
                    "idGenerabil": "1",
                    "isGenerabil": true
                },
                {
                    "name" : "Dovada înregistrării în evidențele organului fiscal al autorității publice locale în a cărui rază de competență proprietarul (sau utilizatorul în cazul vehiculelor care fac obiectul unui contract de leasing financiar) își are domiciliul, sediul ori reședința în cazul persoanelor fizice cu domiciliul în străinătate. Aceasta constă în înscrierea numărului de înregistrare în Registrul de evidenţă a mijloacelor de transport supuse înmatriculării/înregistrării, pe actul de înstrăinare-dobândire",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada plăţii contravalorii certificatului de înmatriculare - 49 lei",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name" : "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se vor prezenta actul de identitate sau, după caz, documente care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Procura specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât proprietarul vehiculului.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA), încheiat pe numele proprietarului vehiculului, în termenul de valabilitate al acestuia",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Documentul care atestă dreptul de proprietate al solicitantului în forma prevăzută de lege la data dobândirii dreptului de proprietate, în original şi în copie, înregistrat în Registrul de evidență a mijloacelor de transport supuse înmatriculării/înregistrării în România, instituit la nivelul organului fiscal local",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se va prezenta şi documentul care să ateste dreptul legal în virtutea căruia persoana poate folosi vehiculul, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În cazul în care vehiculul este folosit în sistem leasing se poate prezenta un extras din contractul de leasing, care să conţină cel puţin părţile, obiectul şi durata contractului, datele de identificare ale vehiculului şi semnăturile părţilor, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dacă persoana care a realizat achiziția intracomunitară a mijlocului de transport și solicită înmatricularea acestuia nu este înregistrată în scopuri de TVA conform art. 316 din Legea nr. 227/2015, cu modificările și completările ulterioare, pe lângă documentele prevăzute la alin. (1), aceasta trebuie să depună, după caz:Dacă persoana care a realizat achiziția intracomunitară a mijlocului de transport și solicită înmatricularea acestuia nu este înregistrată în scopuri de TVA conform art. 316 din Legea nr. 227/2015, cu modificările și completările ulterioare, pe lângă documentele prevăzute la alin. (1), aceasta trebuie să depună, după caz:  - formularul Certificat privind atestarea plății taxei pe valoarea adăugată, în cazul achizițiilor intracomunitare de mijloace de transport, emis de ANAF și prevăzut de Ordinul președintelului Agenției Naționale de Administrare Fiscală pentru aprobarea modelului și conținutului formularelor Certificat privind atestarea plății taxei pe valoarea adăugată, în cazul achizițiilor intracomunitare de mijloace de transport și Certificat, precum și a procedurii de eliberare a acestora SAU - formularul Certificat, emis de ANAF și prevăzut de Ordinul președintelui Agenției Naționale de Administrare Fiscală pentru aprobarea modelului și conținutului formularelor Certificat privind atestarea plății taxei pe valoarea adăugată, în cazul achizițiilor intracomunitare de mijloace de transport” și Certificat, precum și a procedurii de eliberare a acestora.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului, în original şi copie;",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare a cărui combinație a fost păstrată anterior de către solicitant, în măsura în care acesta intenționează atribuirea combinației păstrate, cu ocazia înmatriculării. Acestea se restituie pe loc solicitantului numai dacă îndeplinesc cerințele impuse de standardele în vigoare, iar combinația numărului de înmatriculare nu a fost restricționată conform legii.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada plăţii contravalorii plăcuţelor cu numărul de înmatriculare (cu excepţia cazului în care acesta solicită atribuirea unei combinații a numărului de înmatriculare păstrate anterior). Plata se face prin internet banking, virament bancar, mandat poștal în contul trezoreriei statului (vezi lista conturi - unitati teritoriale) sau numerar la ghișeu odată cu depunerea documentelor",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 12
        },
        {
            "name": "Vehicul achiziţionat din afara UE şi care nu a fost niciodată înmatriculat",
            "necesare": [
                {
                    "name": "Cererea de înmatriculare",
                    "idGenerabil": "1",
                    "isGenerabil": true
                },
                {
                    "name" : "Dovada înregistrării în evidențele organului fiscal al autorității publice locale în a cărui rază de competență proprietarul (sau utilizatorul în cazul vehiculelor care fac obiectul unui contract de leasing financiar) își are domiciliul, sediul ori reședința în cazul persoanelor fizice cu domiciliul în străinătate. Aceasta constă în înscrierea numărului de înregistrare în Registrul de evidenţă a mijloacelor de transport supuse înmatriculării/înregistrării, pe actul de înstrăinare-dobândire",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada plăţii contravalorii certificatului de înmatriculare - 49 lei",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name" : "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se vor prezenta actul de identitate sau, după caz, documente care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Procura specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât proprietarul vehiculului.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA), încheiat pe numele proprietarului vehiculului, în termenul de valabilitate al acestuia",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Documentul care atestă dreptul de proprietate al solicitantului în forma prevăzută de lege la data dobândirii dreptului de proprietate, în original şi în copie, înregistrat în Registrul de evidență a mijloacelor de transport supuse înmatriculării/înregistrării în România, instituit la nivelul organului fiscal local",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se va prezenta şi documentul care să ateste dreptul legal în virtutea căruia persoana poate folosi vehiculul, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În cazul în care vehiculul este folosit în sistem leasing se poate prezenta un extras din contractul de leasing, care să conţină cel puţin părţile, obiectul şi durata contractului, datele de identificare ale vehiculului şi semnăturile părţilor, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Dovada efectuării formalităţilor vamale de import definitiv, sau temporar pentru înmatricularea temporară, în cazul autovehiculelor şi al remorcilor dobândite din străinătate, în cazurile prevăzute de lege, în original sau copie legalizată a acesteia",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului, în original şi copie;",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare a cărui combinație a fost păstrată anterior de către solicitant, în măsura în care acesta intenționează atribuirea combinației păstrate, cu ocazia înmatriculării. Acestea se restituie pe loc solicitantului numai dacă îndeplinesc cerințele impuse de standardele în vigoare, iar combinația numărului de înmatriculare nu a fost restricționată conform legii.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada plăţii contravalorii plăcuţelor cu numărul de înmatriculare (cu excepţia cazului în care acestea se transferă automat noului proprietar, sau a cazului în care acesta solicită atribuirea unei combinații a numărului de înmatriculare păstrate anterior) Plata se face prin internet banking, virament bancar, mandat poștal în contul trezoreriei statului (vezi lista conturi - unitati teritoriale) sau numerar la ghișeu odată cu depunerea documentelor",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                }
            ],
            "id": 13
        },
        {
            "name": "Eliberarea unei/unor plăci cu număr de înmatriculare reclamate ca fiind pierdute, furate sau deteriorate",
            "necesare": [
                {
                    "name": "Cerere de duplicat placă nr. înmatriculare/placă suplimentară",
                    "idGenerabil": "8",
                    "isGenerabil": true
                },
                {
                    "name": "Declaraţia de pierdere/furt, după caz",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Placa/plăcile cu numărul de înmatriculare deteriorat, după caz.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": " Dovada de plată a contravalorii noilor plăcuţe de înmatriculare - 20 lei-placa tip A (dreptunghiulară) sau 40 lei - perechea, 23 lei-placa tip B (pătrată) sau 17 lei-placa tip C (moto)",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }

            ],
            "id": 14
        },
        {
            "name": "Documente necesare pentru eliberarea unui nou certificat de înmatriculare când se modifica date despre vehicul (serie şasiu, culoare, serie C.I.V. etc.)",
            "necesare": [
                {
                    "name": "Cerere de eliberarea unui nou certificat ca urmare a modificării datelor înscrise",
                    "idGenerabil": "5",
                    "isGenerabil": true
                },
                {
                    "name": "Cartea de identitate a vehiculului în original",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Certificatul de înmatriculare în original",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA) în termenul de valabilitate",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada achitării contravalorii certificatului de înmatriculare – 49 lei",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada de plată a contravalorii plăcuţelor cu numărul de înmatriculare şi, după caz, a tarifului legal de atribuire a unei combinaţii preferenţiale a numărului de înmatriculare",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 15
        },
        {
            "name": "Documente necesare pentru eliberarea unui nou certificat de înmatriculare când certificatul de înmatriculare a fost pierdut",
            "necesare": [
                {
                    "name": "Cerere de eliberarea unui duplicat al certificatului de înmatriculare",
                    "idGenerabil": "4",
                    "isGenerabil": true
                },
                {
                    "name": "Declaraţia solicitantului din care să rezulte pierderea documentului",
                    "idGenerabil":"-1",
                    "isGenerabil":false
                },
                {
                    "name":"Dovada achitării contravalorii certificatului de înmatriculare – 49 lei",
                    "idGenerabil":"-1",
                    "isGenerabil":false
                },
                {
                    "name": "Actul de identitate al solicitantului în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora; Delegaţie",
                    "idGenerabil": "-1",
                    "isGenerabil":false
                },
                {
                    "name": "Procură specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât titularul",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 16
        }, 
        {
            "name": "Vehicul achiziţionat din afara UE şi care a mai fost înmatriculat",
            "necesare" :[
                {
                    "name": "Cererea de înmatriculare",
                    "idGenerabil": "1",
                    "isGenerabil": true
                },
                {
                    "name": "Dovada înregistrării în evidențele organului fiscal al autorității publice locale în a cărui rază de competență proprietarul (sau utilizatorul în cazul vehiculelor care fac obiectul unui contract de leasing financiar) își are domiciliul, sediul ori reședința în cazul persoanelor fizice cu domiciliul în străinătate. Aceasta constă în înscrierea numărului de înregistrare în Registrul de evidenţă a mijloacelor de transport supuse înmatriculării/înregistrării, pe actul de înstrăinare-dobândire. În cazul înmatriculării temporare a vehiculelor ce urmează a fi înmatriculate în alt stat nu este necesară depunerea dovezii înregistrării în evidențele organului fiscal al autorității publice locale",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada plăţii contravalorii certificatului de înmatriculare - 49 lei",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Actul de identitate al solicitantului, în original şi în copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul persoanelor juridice vor fi depuse documentele care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie (de exemplu certificat înregistrare la Registrul Comerţului), precum si împuternicirea reprezentatului legal al acestora.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se vor prezenta actul de identitate sau, după caz, documente care să ateste dobândirea personalităţii juridice, denumirea şi sediul, în copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Procura specială autentificată de notarul public, în cazul în care documentele se depun de o altă persoană decât proprietarul vehiculului.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Copia contractului de asigurare de răspundere civilă auto obligatorie pentru prejudicii produse terţilor prin accidente de vehicule şi de tramvaie (RCA), încheiat pe numele proprietarului vehiculului, în termenul de valabilitate al acestuia",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Documentul care atestă dreptul de proprietate al solicitantului în forma prevăzută de lege la data dobândirii dreptului de proprietate, în original şi în copie, înregistrat în Registrul de evidență a mijloacelor de transport supuse înmatriculării/înregistrării în România, instituit la nivelul organului fiscal local",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În situaţia în care în certificatul de înmatriculare urmează a fi înscrisă şi o altă persoană, se va prezenta şi documentul care să ateste dreptul legal în virtutea căruia persoana poate folosi vehiculul, în original şi în copie.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "În cazul în care vehiculul este folosit în sistem leasing se poate prezenta un extras din contractul de leasing, care să conţină cel puţin părţile, obiectul şi durata contractului, datele de identificare ale vehiculului şi semnăturile părţilor, în original şi copie;În cazul în care vehiculul este folosit în sistem leasing se poate prezenta un extras din contractul de leasing, care să conţină cel puţin părţile, obiectul şi durata contractului, datele de identificare ale vehiculului şi semnăturile părţilor, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada efectuării formalităţilor vamale de import definitiv, sau temporar pentru înmatricularea temporară, în cazul autovehiculelor şi al remorcilor dobândite din străinătate, în cazurile prevăzute de lege, în original sau copie legalizată a acesteia",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Cartea de identitate a vehiculului, în original şi copie",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Certificatul de autenticitate al vehiculului eliberat de Registrul Auto Român, cu excepţia autovehiculelor destinate competiţiilor sportive şi a vehiculelor istorice",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Documentele de înmatriculare eliberate de autorităţile străine, în original, precum şi plăcuţele străine cu numărul de înmatriculare",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Plăcuţele cu numărul de înmatriculare a cărui combinație a fost păstrată anterior de către solicitant, în măsura în care acesta intenționează atribuirea combinației păstrate, cu ocazia înmatriculării. Acestea se restituie pe loc solicitantului numai dacă îndeplinesc cerințele impuse de standardele în vigoare, iar combinația numărului de înmatriculare nu a fost restricționată conform legii.Plăcuţele cu numărul de înmatriculare a cărui combinație a fost păstrată anterior de către solicitant, în măsura în care acesta intenționează atribuirea combinației păstrate, cu ocazia înmatriculării. Acestea se restituie pe loc solicitantului numai dacă îndeplinesc cerințele impuse de standardele în vigoare, iar combinația numărului de înmatriculare nu a fost restricționată conform legii.",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada efectuării inspecţiei tehnice periodice, în termenul de valabilitate a acesteia",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                },
                {
                    "name": "Dovada plăţii contravalorii plăcuţelor cu numărul de înmatriculare (cu excepţia cazului în care acesta solicită atribuirea unei combinații a numărului de înmatriculare păstrate anterior). Plata se face prin internet banking, virament bancar, mandat poștal în contul trezoreriei statului (vezi lista conturi - unitati teritoriale) sau numerar la ghișeu odată cu depunerea documentelor",
                    "idGenerabil": "-1",
                    "isGenerabil": false
                }
            ],
            "id": 17
        }
    ]})

    return (
        <FilesContext.Provider value={[files, setFiles]}>{props.children}</FilesContext.Provider>
    );
}