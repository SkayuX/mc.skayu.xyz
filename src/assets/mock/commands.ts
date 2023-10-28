import { Category } from "@/lib/types";


export const MockCommands: Category[] = 
[
    {
      "kategoria": "Teleportacja",
      "komendy": [
        {
          "nazwa": "Akceptuj prośbę o teleportację",
          "komenda": "/tpaccept [gracz]",
          "parametry": {
            "Gracz": "Gracz, którego prośbę akceptujesz"
          }
        },
        {
          "nazwa": "Wyślij prośbę o teleportację",
          "komenda": "/tpa [gracz]",
          "parametry": {
            "Gracz": "Gracz, do którego wysyłasz prośbę"
          }
        },
        {
          "nazwa": "Anuluj prośbę o teleportację",
          "komenda": "/tpacancel [gracz]",
          "parametry": {
            "Gracz": "Gracz, którego prośbę anulujesz"
          }
        },
        {
          "nazwa": "Ignoruj teleportacje od gracza",
          "komenda": "/tptoggle [gracz] [on/off]",
          "parametry": {
            "Gracz": "Gracz, którego teleportacje ignorujesz",
            "On/Off": "Włącz lub wyłącz ignorowanie teleportacji (on/off)"
          }
        }
      ]
    },
    {
      "kategoria": "Dom i Spawn",
      "komendy": [
        {
          "nazwa": "Ustaw dom",
          "komenda": "/sethome [nazwa]",
          "parametry": {
            "Nazwa": "Nazwa domu, którą ustawiasz"
          }
        },
        {
          "nazwa": "Usuń dom",
          "komenda": "/delhome [nazwa]",
          "parametry": {
            "Nazwa": "Nazwa domu, który usuwasz"
          }
        },
        {
          "nazwa": "Teleportuj na dom",
          "komenda": "/home [nazwa]",
          "parametry": {
            "Nazwa": "Nazwa domu, do którego się teleportujesz"
          }
        },
        {
          "nazwa": "Teleportuj na spawn",
          "komenda": "/spawn"
        },
        {
          "nazwa": "Pokaż listę warpów",
          "komenda": "/warp"
        },
        {
          "nazwa": "Informacje o warpie",
          "komenda": "/warpinfo [warp]",
          "parametry": {
            "Warp": "Nazwa warpa, o którym chcesz dowiedzieć się więcej"
          }
        }
      ]
    },
    {
      "kategoria": "Ekonomia",
      "komendy": [
        {
          "nazwa": "Sprzedaj item",
          "komenda": "/sell [hand] [cena]",
          "parametry": {
            "Hand": "Item, który chcesz sprzedać (przykład: iron_sword)",
            "Cena": "Cena, za którą sprzedajesz item"
          }
        },
        {
          "nazwa": "Pokaż balans gracza",
          "komenda": "/balance [gracz]",
          "parametry": {
            "Gracz": "Gracz, którego balans chcesz sprawdzić"
          }
        },
        {
          "nazwa": "Przelej pieniądze do gracza",
          "komenda": "/pay [gracz] [cena]",
          "parametry": {
            "Gracz": "Gracz, któremu przelewasz pieniądze",
            "Cena": "Ilość pieniędzy, którą przekazujesz"
          }
        },
        {
          "nazwa": "Topka bogaczy",
          "komenda": "/balancetop [strona]",
          "parametry": {
            "Strona": "Numer strony rankingu bogaczy"
          }
        }
      ]
    },
    {
      "kategoria": "Różne",
      "komendy": [
        {
          "nazwa": "Ustaw blok na głowie",
          "komenda": "/hat [remove]",
          "parametry": {
            "Remove": "Opcjonalny parametr do usunięcia bloku z głowy"
          }
        },
        {
          "nazwa": "Wyślij wiadomość prywatną",
          "komenda": "/msg [gracz] [wiadomosc]",
          "parametry": {
            "Gracz": "Gracz, do którego wysyłasz wiadomość",
            "Wiadomosc": "Wiadomość prywatna"
          }
        },
        {
          "nazwa": "Ignoruj gracza",
          "komenda": "/ignore [gracz]",
          "parametry": {
            "Gracz": "Gracz, którego ignorujesz"
          }
        },
        {
          "nazwa": "Wiadomość do administracji",
          "komenda": "/helpop [wiadomość]",
          "parametry": {
            "Wiadomość": "Wiadomość, którą wysyłasz do administracji"
          }
        },
        {
          "nazwa": "Odbierz kit",
          "komenda": "/kit [nazwa]",
          "parametry": {
            "Nazwa": "Nazwa zestawu (kit), który odbierasz"
          }
        }
      ]
    },
    {
      "kategoria": "Nowe",
      "komendy": [
        {
          "nazwa": "Wyświetl menu pomocy",
          "komenda": "/pa help"
        },
        {
          "nazwa": "Sprzedaj item na aukcji",
          "komenda": "/pa sell [cena] [waluta] [ilość]",
          "parametry": {
            "Cena": "Cena, za którą sprzedajesz item",
            "Waluta": "Waluta, w której przeprowadzasz transakcję",
            "Ilość": "Ilość sprzedawanych itemów"
          }
        },
        {
          "nazwa": "Zaoferuj item na aukcji",
          "komenda": "/pa bid [cena]",
          "parametry": {
            "Cena": "Cena, którą oferujesz za item na aukcji"
          }
        },
        {
          "nazwa": "Aukcja przez GUI",
          "komenda": "/pa auction"
        },
        {
          "nazwa": "Anuluj swoją aukcję itemu",
          "komenda": "/pa cancel [id] [gracz]",
          "parametry": {
            "Id": "ID aukcji do anulowania",
            "Gracz": "Gracz, którego aukcję anulujesz"
          }
        },
        {
          "nazwa": "Odbierz anulowane itemy",
          "komenda": "/pa collect"
        },
        {
          "nazwa": "Otwórz GUI aukcji gracza",
          "komenda": "/pa open [menu] [opcje]",
          "parametry": {
            "Menu": "Menu aukcji, które otwierasz",
            "Opcje": "Opcje aukcji (opcjonalne)"
          }
        },
        {
          "nazwa": "Zobacz liczbę własnych aukcji",
          "komenda": "/pa amount"
        }
      ]
    }
]  