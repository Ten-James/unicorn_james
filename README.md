# Welcome to unicorn_james
> "Nevěř ostnatému drátu, byť by se stokrát tvářil jako
stonek růže." Karel Kryl

James's Git


## O mně
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

## Co vlastně umím? Z IT oddělení

### C :green_circle::green_circle::green_circle::black_circle::black_circle:
z 90% to co jsem se naučil ve škole, nic extra ale zvládám práci s soubory, basic IO atd.
```c
FILE *f;
if (argc <=1) return 0xff;
int a = atoi(argv[1]);
if (a == 1)
{
    if ((f = fopen("cisla.txt","w")) == NULL) return 0;
    for (int i = 1; i <= 10; i++)
        fputc(i, f);
    printf("Soubor byl otevren\n");
    fclose(f);
}
else
{
    if ((f = fopen("cisla.txt","r")) == NULL) return 0;
    char c;
    do {
    c = fgetc(f);
    if (c == EOF) break;
        printf("%d", c);
    } while (1);
}
fclose(f);
return 0;
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
            ToBeSpawn = Multiply(spawnonstart,round);
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
}
```

***
### Python :green_circle::green_circle::black_circle::black_circle::black_circle:
Základy, používaní gtts a pyaudio pro vytvoření voice assistent, práce se soubory, základy oop.

```py
def provedeni(text):
    if 'otevři youtube' in text: 
        Respond(" Youtube") 
        webbrowser.get(_chromepath).open("youtube.com") 
    elif 'otevři google' in text: 
        Respond(" Google") 
        webbrowser.get(_chromepath).open("google.com") 
    elif 'přelož do' in text: 
        text = text.replace('přelož do ','')
        translator= Translator(to_lang="en")
        Respond(translator.translate(text))
    elif 'ukaž cestu' in text or 'ukaž mi cestu' in text: 
        print(_Cesta)
    elif 'ukaž' in text or 'v cestě' in text: 
        if 'soubory' in text:
            VypsatListCest(lists_of_Rests)
        if 'složky' in text:
            VypsatListCest(lists_of_Folder)
        elif 'hudbu' in text or 'písničky' in text:
            VypsatListCest(lists_of_songs)
        elif 'zástupci' in text or 'programy' in text:
            VypsatListCest(lists_of_Zastupci)
        elif 'obrázky' in text:
            VypsatListCest(lists_of_Images)
    elif 'přehraj' in text:
        text = text.replace('přehraj ','')
        for song in lists_of_songs:
            if text in os.path.basename(song).lower():
                os.startfile(song)
                break
    elif 'otevři' in text:
        text = text.replace('otevři ','')
        for song in lists_of_Zastupci:
            if text in os.path.basename(song).lower():
                os.startfile(song)
                break
```

***
### PHP :green_circle::green_circle::black_circle::black_circle::black_circle:
Propojení na databazi, select dat
```php

<div class="searchcontainer">
<input type="text"
<?php
if (isset($_GET["type"]))
{
    echo "value =\"".$_GET["type"]."\"";
}
?> id="searchbar">
<input type="button" value="Search" onclick="SearchButton('');">
<input type="button" value="Search by cost" onclick="SearchButton('acost');">
</div>
<?php
$sql = "";
if (isset($_GET["type"]))
{
    $sql = "SELECT * FROM `product` WHERE type LIKE '%{$_GET["type"]}%'";
}
else{
    $sql = "SELECT * FROM `product`";
}
if (isset($_GET["order"]))
{
    if ($_GET["order"] == "acost")
    {
        $sql = $sql." ORDER BY cost ASC";
    }
    else if ($_GET["order"] == "dcost")
    {
        $sql = $sql." ORDER BY cost DESC";
    }
}
 $sql = $sql.";";
 echo "<table><colgroup><col span=\"1\" style=\"width:30%\"><col span=\"1\" style=\"width:30%\"><col span=\"1\" style=\"width:30%\"></colgroup><thead><th>Název</th><th>Typ</th><th>Cena</th> </thead>";
 $query = mysqli_query($conn, $sql);
 $result = mysqli_num_rows($query);

if ($result > 0)
{
    while ($row = mysqli_fetch_assoc($query))
    {
        echo "<tr>";
        echo "<td><input type=\"button\" value=\"{$row['name']}\" onclick=\"OpenEntry({$row['id']})\">"."</td>";
        echo "<td>{$row['type']}</td>";
        echo "<td>{$row['cost']}</td>";
        echo "</tr>";
    }
}
echo "</table>";
echo $sql;
?>
```
***
### MySQL :green_circle::green_circle::green_circle::black_circle::black_circle:
Práce z databází. Základní logistika, Uprava Velkého počtu dat kvůli špatnému rozvržení databáze.

***

Ještě umím práci v terminálu jak na Macu tak ve windows,
Kompilaci C a Cpp pomocí gcc.
Pro C# používám Visual Studio 2019, na zbytek mám Vs Code.
Databáze upravuji pomocí Dbeaver.


Toho je tu celkem dost 😂 😂

## Kontakt

| Mady by James | 17.05.2021 |
| :--- | ---: |
| Email: | |
|  | jakub.indrak@email.cz |
|  | j.indrak.st@spseiostrava.cz |
|Tel: | |
|    | 604 969 426 |
