const dzielenie = require("./dzielenie.js");

describe("dzielenie", function(){
    test("Zwraca true dla dwóch małych liczb podzielnych", function(){
        expect(dzielenie(4,2)).toBe(true);
    });
    test("Zwraca false dla dwóch małych liczb niepodzielnych", function(){
        expect(dzielenie(5,2)).toBe(false);
    });
    test("Zwraca null dla wprowadzonej litery", function(){
        expect(dzielenie("a")).toBe(null);
    });
    test("Zwraca true dla dużych liczb podzielnych", function(){
        expect(dzielenie(553963234650953700,983472309)).toBe(true);
    });
    test("Zwraca false dla dwóch małych liczb podzielnych", function(){
        expect(dzielenie(553963234650953700,983472307)).toBe(false);
    });
    test("Zwraca false dla liczby zmiennoprzecinkowej", function(){
        expect(dzielenie(12.25,2)).toBe(false);
    });
    test("Zwraca true dla wprowadzonej liczby podzielnej przez 2 (2 jest domyslnym dzielnikiem)", function(){
        expect(dzielenie(4)).toBe(true);
    });
   test("Zwraca false dla wprowadzonej liczby niepodzielnej przez 2 (2 jest domyslnym dzielnikiem)", function(){
        expect(dzielenie(5)).toBe(false);
    }); 
});

















