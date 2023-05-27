# Why 

Opis zašto radimo ove izmene


# What 

Šta smo tačno izmenili, da onaj ko pregleda ima ideju gde da obrati pažnju i zašto su određeni fajlovi izmenjeni

# How to test 

Kako testirati da sve radi kao što je autor zamislio?

### Primer 1:


Uz pomc postmana uraditi POST zahtev na
http://localhost:3000/api/test-xml?pitanje=kakoe


ocekivano

400 Bad Request
```html
<html> <body> POGRESIO SI DECKO, MOZE SAMO GET </body> </html>
```


### Primer 2
Uz pomoć postmana uraditi GET zahtev na
[http://localhost:3000/api/test-xml?pitanje=kakoe](http://localhost:3000/api/test-json?neki_kljuc=neka_vrednost&ime=Seb&prezime=Novak&neznam=nesto)

Očekivan odgovor:

200 OK 
```json
{
    "root": {
        "odgovor": {
            "bitnaInformacija": "Ovo je bitna informacija",
            "id": 1,
            "queryParam": {
                "neki_kljuc": "neka_vrednost",
                "ime": "Seb",
                "prezime": "Novak",
                "neznam": "nesto"
            }
        }
    }
}
```


