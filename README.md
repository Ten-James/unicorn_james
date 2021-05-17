# Welcome to unicorn_james
> "Nevěř ostnatému drátu  byť vz se stokrát tvářil jako stonek růží."  
Karel Kryl

James's Git


# O mně
Ahoj já jsem James, Pokuď ti to nevadí říkej mi James.
Jestli jo tak mi říkej jak chceš 🤷‍♂️

### Moje koníčky
*   Programování
*   Editace Videa a fotek
*   Hraní her
*   Kreslení  - i Když mi to vůbec nejde 😂😂   
*   Horse riding 🐴
*   Lektořina a Pomáhání ostatním


Hele mě je to vlastně jedno. I hope u like it 🌝

# Co vlastně umím? Z IT oddělení

### C :green_circle::green_circle::green_circle::black_circle::black_circle:
z 90% to co jsem se naučil ve škole, nic extra ale zvládám práci s soubory, basic IO atd.
```c
  FILE *soubor;
  if (argc <=1) return 0;
  int a = atoi(argv[1]);
  if (a == 1)
  {
   soubor = fopen("cisla.txt","w");
   if (soubor == NULL) return 0;
   int i;
   for (i = 1; i <= 10; i++) {
     fputc(i, soubor);
   }
   printf("Soubor byl otevren\n");
   fclose(soubor);
   return 0;
  }
  else
  if (a==0)
  {
    soubor = fopen("cisla.txt","r");
    if (soubor == NULL) return 0;
    char c;
    do {
      c = fgetc(soubor);
      if (c == EOF) break;
      printf("%d", c);
    } while (1);
    fclose(soubor);
```
***
### Cpp :green_circle::green_circle::black_circle::black_circle::black_circle:
Defakto vše co je v C. K tomu základní nadstavby IOStreamu.

***
### C# :green_circle::green_circle::green_circle::green_circle::black_circle:
*   OOP
*   Nové expression
*   Async
*   Práci s databází
*   Práce s knihovnou "UnityEngine"
*   Komplentí vývoj Destop Apky v .net frameworku

```c#
    public MainEnemy Overpath
    {
        get
        {
            if (_OverPaths.Count == 0) return null;
            return _OverPaths.Pop();
        }
        set
        {
            _OverPaths.Push(value);
        }
    }
    private Stack<GameObject> _toSpawnStack;
    public bool isRound
    {
        get
        {
            return Enemies.Count != 0;
        }
        set
        {
            if (value)
            {
                round += 1;
                ToBeSpawn = Multiply(spawnonstart, round);
            }
        }
    }
```
***
### Java :green_circle::black_circle::black_circle::black_circle::black_circle:
Zvládl bych napsat "Hello World" 🥱🥱

***
### HTML :green_circle::green_circle::green_circle::green_circle::black_circle:
Hele, co si budeme, web by zvládl napsat každý ňouma, takže já to zvládám taky, není to nic težkého. 

***
### CSS :green_circle::green_circle::green_circle::green_circle::black_circle:
Stylování webů je defakto taky strašně jednoduché, Hoří je to udělat tak aby v tom měl člověk přehled

Nikdy jsem nepoužil žádné nadstavby typu scss atd.
***
### JS :green_circle::green_circle::black_circle::black_circle::black_circle:
Mám nějaké základy s knihovnou Jquery, Díky které jsem dělal basic search bar podle element.dataset,

```js
$(".prod-search-bar").keyup(function(){
    RefreshView();
});

var filtertext = "", sklad = false, novin = false, akce = false;
function RefreshView() {
    filtertext = $('.prod-search-bar').val();
    sklad = $("#chk-sklad").prop("checked");
    novin = $("#chk-nov").prop("checked");
    akce = $("#chk-akc").prop("checked");

    console.log("klik");

    $(".prod-item").each(function(){
        var show = this.dataset.filter.includes(filtertext);
        if (sklad)
            show = show && this.dataset.args.includes("s");

        if (novin)
            show = show && this.dataset.args.includes("n");
        
        if (akce)
            show = show && this.dataset.args.includes("a");

        this.style.display = "none";
        if (show)
            this.style.display = "block";
    });

     // By James Indrak.

}
```

***
### Python :green_circle::green_circle::black_circle::black_circle::black_circle:
Základy, používaní gtts a pyaudio pro vytvoření voice assistent, práce se soubory, základy oop.

***
### PHP :green_circle::green_circle::black_circle::black_circle::black_circle:
Propojení na databazi, select dat

***
### MySQL :green_circle::green_circle::green_circle::black_circle::black_circle:
Práce z databází. Základní logistika, Uprava Velkého počtu dat kvůli špatnému rozvržení databáze.

***

Ještě umím práci v terminálu jak na Macu tak ve windows,
Kompilaci C a Cpp pomocí gcc.  
Pro C# používám Visual Studio 2019, na zbytek mám Vs Code.  
Databáze upravuji pomocí Dbeaver.


Toho je tu celkem dost 😂 😂

# Kontakt
*   Email: 
    *   jakub.indrak@email.cz
    *   j.indrak.st@spseiostrava.cz
*   Tel:
    *   604 969 426
