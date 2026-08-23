export type KnowledgeBlock =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "callout"; label?: string; text: string }
  | { type: "formula"; lines: string[] }
  | { type: "list"; items: string[] };

export type KnowledgeArticle = {
  number: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  blocks: KnowledgeBlock[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    number: 1,
    slug: "zysk-to-nie-gotowka",
    title: "Zysk to nie gotówka. Dlaczego firma może zarabiać i jednocześnie nie mieć pieniędzy?",
    excerpt: "Najważniejsza różnica w finansach małej firmy: wynik mówi, czy biznes zarabia, a gotówka — czy ma czym płacić.",
    category: "Fundamenty finansów",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "To jedna z najważniejszych rzeczy do zrozumienia w finansach firmy: zysk i gotówka to nie to samo." },
      { type: "paragraph", text: "Wyobraź sobie firmę, która w marcu sprzedała usługi za 100 tys. zł. Koszt ich wykonania wyniósł 70 tys. zł. Na papierze firma zarobiła więc 30 tys. zł." },
      { type: "paragraph", text: "Problem w tym, że klienci mają 45 dni na zapłatę. W marcu firma wystawiła faktury, ale pieniędzy jeszcze nie dostała. Jednocześnie musiała zapłacić pracownikom, dostawcom, ZUS i czynsz." },
      { type: "callout", label: "Wniosek", text: "Firma może mieć 30 tys. zł zysku i jednocześnie ubytek pieniędzy na rachunku." },
      { type: "paragraph", text: "Działa to również w drugą stronę. Jeśli firma zaciągnie kredyt na 100 tys. zł, jej konto zwiększy się o 100 tys. zł, ale nie oznacza to, że cokolwiek zarobiła." },
      { type: "paragraph", text: "Podobnie zakup samochodu za 120 tys. zł może spowodować jednorazowy duży wypływ pieniędzy, podczas gdy w wyniku finansowym koszt będzie rozłożony na kilka lat poprzez amortyzację." },
      { type: "heading", text: "Na jakie dwa pytania patrzeć równocześnie?" },
      { type: "list", items: ["Czy moja działalność jest rentowna?", "Czy generuje wystarczająco dużo gotówki?"] },
      { type: "paragraph", text: "Firma może być rentowna, ale mieć problemy z płynnością. Może też przez pewien czas mieć dużo pieniędzy na koncie, mimo że jej podstawowy biznes przynosi straty." },
      { type: "callout", text: "Nie pytaj tylko: „Ile zarobiłem?”. Dodaj drugie pytanie: „Dlaczego mam dziś więcej lub mniej pieniędzy niż miesiąc temu?”" },
      { type: "paragraph", text: "Dopiero odpowiedź na oba pytania daje prawdziwy obraz sytuacji." }
    ]
  },
  {
    number: 2,
    slug: "ile-naprawde-zarabia-firma",
    title: "Ile naprawdę zarabia moja firma?",
    excerpt: "Obrót to nie wynik. Zobacz, jak przejść od sprzedaży do ekonomicznego obrazu tego, ile naprawdę zostaje właścicielowi.",
    category: "Fundamenty finansów",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Przedsiębiorcy często odpowiadają na pytanie o wyniki firmy, podając sprzedaż: „Robimy około 150 tysięcy miesięcznie”. To ważna informacja, ale nie mówi jeszcze, ile firma rzeczywiście zarabia." },
      { type: "paragraph", text: "Załóżmy, że firma sprzedaje miesięcznie za 150 tys. zł netto. Materiały i towary kosztują 60 tys. zł. Wynagrodzenia 35 tys. zł. Czynsz, samochody, księgowość, telefony, systemy IT i inne koszty to kolejne 30 tys. zł." },
      { type: "formula", lines: ["150 tys. zł sprzedaży", "− 60 tys. zł materiały i towary", "− 35 tys. zł wynagrodzenia", "− 30 tys. zł pozostałe koszty", "= 25 tys. zł wyniku"] },
      { type: "paragraph", text: "To pierwszy obraz wyniku. Ale nawet wtedy warto zadać kolejne pytania: czy właściciel pracuje w firmie, ile godzin, czy pobiera normalne wynagrodzenie i czy w danym miesiącu nie pojawiły się koszty wyjątkowo niskie albo wysokie." },
      { type: "paragraph", text: "Wyobraźmy sobie przedsiębiorcę, który pracuje 200 godzin miesięcznie, ale nie wypłaca sobie wynagrodzenia. Gdyby zatrudnienie osoby wykonującej podobną pracę kosztowało firmę 15 tys. zł miesięcznie, ekonomiczny wynik biznesu nie wynosi już 25 tys. zł, ale raczej około 10 tys. zł." },
      { type: "heading", text: "Dwa różne wyniki" },
      { type: "list", items: ["Wynik księgowy — wynikający z zasad rachunkowych lub podatkowych.", "Wynik ekonomiczny — odpowiadający na pytanie, ile biznes naprawdę zarabia po uwzględnieniu wszystkich zasobów potrzebnych do jego funkcjonowania."] },
      { type: "paragraph", text: "W małej firmie drugi z tych wyników jest często znacznie ważniejszy dla właściciela." },
      { type: "callout", text: "Jeśli przedsiębiorca pracuje po 10 godzin dziennie, a po uwzględnieniu wartości własnej pracy biznes generuje 3 tys. zł zysku, problemem może być nie księgowość, lecz model biznesowy." }
    ]
  },
  {
    number: 3,
    slug: "wlasciciel-pracuje-za-darmo",
    title: "Pracuję we własnej firmie za darmo. Czy mój zysk jest prawdziwy?",
    excerpt: "Darmowa praca właściciela i rodziny może mocno zawyżać obraz rentowności. Jak policzyć wynik ekonomiczny firmy?",
    category: "Fundamenty finansów",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "W wielu mikrofirmach właściciel nie pobiera normalnego wynagrodzenia. Podobnie bywa z małżonkiem, rodzicami czy dziećmi pomagającymi w działalności. Księgowo firma może wyglądać wtedy bardzo dobrze." },
      { type: "paragraph", text: "Przykład: firma osiąga miesięcznie 100 tys. zł sprzedaży, 80 tys. zł kosztów i 20 tys. zł wyniku. Wygląda nieźle." },
      { type: "paragraph", text: "Ale właściciel pracuje w niej codziennie po 9 godzin. Jego żona zajmuje się administracją i rozliczeniami po kilka godzin dziennie. Żadne z nich nie pobiera rynkowego wynagrodzenia." },
      { type: "paragraph", text: "Gdyby firma musiała zatrudnić menedżera za 12 tys. zł oraz osobę administracyjną za 5 tys. zł, ekonomiczny wynik spadłby z 20 tys. do około 3 tys. zł." },
      { type: "callout", label: "Co naprawdę widzimy?", text: "Większa część „zysku” jest w rzeczywistości wynagrodzeniem właścicieli za ich pracę." },
      { type: "paragraph", text: "Nie ma w tym nic złego. Problem powstaje dopiero wtedy, kiedy przedsiębiorca uważa całe 20 tys. zł za zwrot z posiadania firmy." },
      { type: "callout", text: "Dobry test: „Co stałoby się z wynikiem, gdybym jutro musiał zatrudnić kogoś na swoje miejsce?”" },
      { type: "paragraph", text: "Jeżeli po uwzględnieniu takiego kosztu firma nadal zarabia — mamy biznes zdolny generować zysk niezależnie od darmowej pracy właściciela." },
      { type: "paragraph", text: "Jeżeli wynik spada do zera, firma może być przede wszystkim dobrze płatnym miejscem pracy dla właściciela, a nie samodzielnie zarabiającym aktywem." },
      { type: "paragraph", text: "To bardzo istotne przy podejmowaniu decyzji o rozwoju, zatrudnianiu ludzi, sprzedaży firmy czy ocenie, czy warto dalej skalować działalność." }
    ]
  },
  {
    number: 4,
    slug: "zysk-jdg-a-spolka-zoo",
    title: "Zysk w JDG i zysk w spółce z o.o. to nie do końca to samo",
    excerpt: "Wypłata właściciela, wynik firmy i podatek to trzy różne rzeczy. Szczególnie wyraźnie widać to przy porównaniu JDG i spółki.",
    category: "Fundamenty finansów",
    readTime: "5 min",
    blocks: [
      { type: "lead", text: "W jednoosobowej działalności gospodarczej właściciel i biznes są ze sobą znacznie mocniej połączeni niż w spółce kapitałowej. To powoduje wiele nieporozumień." },
      { type: "paragraph", text: "W JDG przedsiębiorca może np. przelać pieniądze z rachunku firmowego na prywatny. Taki przelew sam w sobie nie jest wynagrodzeniem ani kosztem firmy." },
      { type: "paragraph", text: "Jeżeli firma wypracowała 20 tys. zł dochodu, a właściciel wypłacił sobie 15 tys. zł na prywatne konto, nie oznacza to, że firma osiągnęła 5 tys. zł zysku. Wypłata właściciela jest czymś innym niż koszt prowadzenia działalności." },
      { type: "paragraph", text: "W spółce z o.o. sytuacja wygląda inaczej. Spółka jest odrębnym podmiotem. Pieniądze znajdujące się na jej rachunku nie są automatycznie prywatnymi pieniędzmi wspólnika." },
      { type: "paragraph", text: "Właściciel może otrzymywać pieniądze ze spółki na określonych zasadach, np. jako wynagrodzenie, zwrot określonych kosztów czy dywidendę." },
      { type: "heading", text: "Wynik biznesowy a wynik podatkowy" },
      { type: "paragraph", text: "Wynik biznesowy i wynik podatkowy również nie zawsze są tym samym. W JDG sposób liczenia podatku zależy m.in. od wybranej formy opodatkowania. Przedsiębiorca na ryczałcie może płacić podatek od przychodu, mimo że z ekonomicznego punktu widzenia nadal powinien wiedzieć, ile jego biznes faktycznie zarabia po kosztach." },
      { type: "formula", lines: ["przychody", "− rzeczywiste koszty działalności", "− ekonomiczny koszt pracy właściciela", "= wynik biznesu"] },
      { type: "callout", text: "Forma prawna i podatki wpływają na to, jak pieniądze są rozliczane. Podstawowe pytanie pozostaje jednak takie samo: czy biznes po uwzględnieniu wszystkich potrzebnych zasobów naprawdę tworzy wartość?" }
    ]
  },
  {
    number: 5,
    slug: "plynnosc-finansowa",
    title: "Płynność finansowa: firma upada nie wtedy, gdy nie ma zysku, ale gdy nie ma czym zapłacić",
    excerpt: "Płynność to nie saldo dzisiaj. To odpowiedź na pytanie, czy firma będzie miała pieniądze wtedy, kiedy pojawią się zobowiązania.",
    category: "Płynność i gotówka",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Można prowadzić firmę, która zarabia, i jednocześnie nie mieć pieniędzy na wypłatę wynagrodzeń. To właśnie problem płynności." },
      { type: "callout", label: "Najprościej", text: "Płynność oznacza: czy będę miał pieniądze wtedy, kiedy trzeba będzie coś zapłacić?" },
      { type: "paragraph", text: "Nie chodzi tylko o dzisiejsze saldo bankowe. Załóżmy, że firma ma dziś 80 tys. zł na rachunku. Wygląda bezpiecznie." },
      { type: "paragraph", text: "Ale w ciągu najbliższych dwóch tygodni musi zapłacić 30 tys. zł wynagrodzeń, 18 tys. zł VAT i innych podatków, 25 tys. zł dostawcom i 10 tys. zł rat kredytów. Łącznie 83 tys. zł." },
      { type: "paragraph", text: "Jeżeli w tym czasie spodziewane wpływy wynoszą tylko 20 tys. zł, firma ma problem, mimo że dzisiejsze saldo wygląda komfortowo." },
      { type: "heading", text: "Płynnością zarządza się do przodu" },
      { type: "formula", lines: ["saldo początkowe", "+ oczekiwane wpływy", "− przewidywane wydatki", "= prognozowane saldo"] },
      { type: "paragraph", text: "Prognoza nie musi być idealnie dokładna. Ma ostrzegać. Jeśli dzisiaj widzisz, że za pięć tygodni zabraknie 30 tys. zł, masz czas: możesz przyspieszyć ściąganie należności, przesunąć inwestycję, porozmawiać z dostawcą albo bankiem." },
      { type: "callout", text: "Płynność to nie księgowość. To system wczesnego ostrzegania firmy." }
    ]
  },
  {
    number: 6,
    slug: "saldo-na-koncie",
    title: "Saldo na koncie nie mówi, ile pieniędzy naprawdę masz",
    excerpt: "Na rachunku może leżeć 120 tys. zł, ale część tej kwoty może już być ekonomicznie zarezerwowana na podatki, ludzi i dostawców.",
    category: "Płynność i gotówka",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Na rachunku firmowym jest 120 tys. zł. Czy możesz wydać 100 tys. na nową maszynę? Niekoniecznie." },
      { type: "paragraph", text: "Część pieniędzy znajdujących się na rachunku może być już ekonomicznie „zarezerwowana”. Przykładowo w ciągu najbliższych tygodni firma musi zapłacić 25 tys. zł VAT, 15 tys. zł innych podatków i składek, 30 tys. zł wynagrodzeń i 20 tys. zł dostawcom." },
      { type: "formula", lines: ["120 tys. zł na rachunku", "− 25 tys. zł VAT", "− 15 tys. zł podatki i składki", "− 30 tys. zł wynagrodzenia", "− 20 tys. zł dostawcy", "≈ 30 tys. zł względnie wolnej gotówki"] },
      { type: "paragraph", text: "To oczywiście uproszczenie, bo w międzyczasie pojawią się kolejne wpływy i wydatki. Pokazuje jednak ważną zasadę: saldo bankowe nie jest tym samym co pieniądze dostępne do swobodnego wykorzystania." },
      { type: "heading", text: "Trzy mentalne koszyki" },
      { type: "list", items: ["Pieniądze potrzebne do normalnego działania firmy.", "Zobowiązania, które wkrótce trzeba będzie zapłacić.", "Środki, które można uznać za względnie wolne."] },
      { type: "paragraph", text: "To szczególnie ważne w firmach, które otrzymują duże zaliczki od klientów albo mają silną sezonowość. Hotel może mieć w maju dużo pieniędzy z rezerwacji wakacyjnych, ale część tej gotówki będzie potrzebna do obsługi klientów w lipcu i sierpniu." },
      { type: "callout", text: "Duże saldo daje poczucie bezpieczeństwa. Czasami fałszywe. Lepsze pytanie brzmi: ile pieniędzy pozostanie mi po uwzględnieniu zobowiązań najbliższych tygodni?" }
    ]
  },
  {
    number: 7,
    slug: "ile-gotowki-wygenerowala-firma",
    title: "Ile gotówki firma wygenerowała w tym miesiącu?",
    excerpt: "Wzrost salda nie zawsze oznacza, że biznes wygenerował gotówkę. Kredyt, inwestycja albo wypłata właściciela mogą całkowicie zmienić obraz.",
    category: "Płynność i gotówka",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Najprostszy punkt wyjścia to porównanie rachunku bankowego. Na początku miesiąca firma miała 70 tys. zł, a na końcu 95 tys. zł. Gotówki przybyło więc 25 tys. zł." },
      { type: "paragraph", text: "Czy firma wygenerowała 25 tys. zł z podstawowej działalności? Nie wiemy." },
      { type: "paragraph", text: "Być może właściciel wpłacił do firmy 50 tys. zł pożyczki. Wtedy działalność operacyjna mogła faktycznie zużyć 25 tys. zł. Albo firma kupiła za gotówkę samochód za 60 tys. zł. Wtedy podstawowa działalność mogła wygenerować aż 85 tys. zł, z których 60 tys. zostało przeznaczone na inwestycję." },
      { type: "heading", text: "Rozłóż zmianę gotówki na przyczyny" },
      { type: "list", items: ["Działalność operacyjna — pieniądze od klientów minus codzienne wydatki.", "Inwestycje — samochody, maszyny, wyposażenie.", "Finansowanie — kredyty, pożyczki i ich spłaty.", "Wypłaty właścicielskie."] },
      { type: "callout", text: "Zamiast: „Saldo wzrosło o 25 tys.” lepiej wiedzieć: „Biznes wygenerował 70 tys., 30 tys. przeznaczyliśmy na inwestycje, 15 tys. na spłatę kredytu. Zostało 25 tys.”" },
      { type: "paragraph", text: "Nie chodzi o budowanie profesjonalnego rachunku przepływów pieniężnych. Chodzi o zrozumienie skąd naprawdę biorą się pieniądze i gdzie znikają." }
    ]
  },
  {
    number: 8,
    slug: "wzrost-sprzedazy-a-gotowka",
    title: "Dlaczego rosnąca sprzedaż może doprowadzić firmę do problemów z gotówką?",
    excerpt: "Szybki wzrost może wymagać coraz większego finansowania zapasów, ludzi i należności, zanim klient zapłaci.",
    category: "Płynność i gotówka",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Więcej sprzedaży brzmi jak dobra wiadomość. I zwykle nią jest. Ale szybki wzrost potrafi również doprowadzić firmę do kryzysu płynności." },
      { type: "paragraph", text: "Załóżmy, że firma otrzymuje duże zamówienie. Aby je zrealizować, musi kupić za 80 tys. zł materiałów, zapłacić pracownikom i transportowi. Klient zapłaci dopiero 60 dni po wystawieniu faktury." },
      { type: "paragraph", text: "Firma zarobi na kontrakcie 30 tys. zł, ale zanim otrzyma pieniądze, musi sfinansować całe przedsięwzięcie z własnej kieszeni. Jeżeli takich zamówień pojawi się kilka naraz, może zabraknąć gotówki." },
      { type: "callout", label: "Paradoks wzrostu", text: "Im szybciej rośnie firma, tym więcej pieniędzy może potrzebować." },
      { type: "paragraph", text: "Szczególnie dotyczy to firm, które utrzymują zapasy, dają klientom długie terminy płatności, muszą płacić dostawcom szybko albo zatrudniają ludzi przed pojawieniem się dodatkowej sprzedaży." },
      { type: "heading", text: "Przed dużym kontraktem zadaj dwa pytania" },
      { type: "list", items: ["Ile na nim zarobię?", "Ile pieniędzy muszę wyłożyć i na jak długo?"] },
      { type: "paragraph", text: "Duże zamówienie, które daje 15% marży, ale wymaga zamrożenia kilkuset tysięcy złotych na trzy miesiące, może być dla niewielkiej firmy znacznie trudniejsze niż mniejszy kontrakt płatny z góry." },
      { type: "callout", text: "Wzrost powinien być nie tylko rentowny. Powinien być również finansowalny." }
    ]
  },
  {
    number: 9,
    slug: "naleznosci-sprzedaz-to-nie-pieniadze",
    title: "Należności: sprzedaż to jeszcze nie pieniądze",
    excerpt: "Faktura zwiększa sprzedaż, ale dopiero zapłata zwiększa gotówkę. Jak nie zostać bankiem swoich klientów?",
    category: "Płynność i gotówka",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Wystawienie faktury nie oznacza, że firma otrzymała pieniądze. Do momentu zapłaty mamy należność." },
      { type: "paragraph", text: "Załóżmy, że w maju firma sprzedała towary za 200 tys. zł. Na rachunek wpłynęło tylko 140 tys. zł. Pozostałe 60 tys. czeka na zapłatę. Firma wykonała swoją część pracy, ale nadal finansuje klienta." },
      { type: "paragraph", text: "Jeżeli termin płatności wynosi 30 dni, jest to normalny element biznesu. Problem zaczyna się wtedy, gdy 30 dni zmienia się w 60, 90 albo 120." },
      { type: "paragraph", text: "Przy dużej liczbie klientów trudno zauważyć pogorszenie sytuacji. Sprzedaż może nawet rosnąć, a jednocześnie coraz większa jej część pozostaje niezapłacona." },
      { type: "heading", text: "Nie patrz tylko na sumę należności" },
      { type: "paragraph", text: "Warto obserwować również ich wiek. Inaczej należy patrzeć na fakturę wystawioną pięć dni temu, a inaczej na fakturę, która jest 70 dni po terminie." },
      { type: "paragraph", text: "Dobre zarządzanie należnościami zaczyna się przed wystawieniem faktury: komu sprzedajemy, jaki dajemy termin, czy klient zawsze płaci terminowo i czy przy większym zamówieniu nie warto pobrać zaliczki." },
      { type: "callout", text: "Każda złotówka, której klient jeszcze nie zapłacił, musi zostać chwilowo sfinansowana przez kogoś innego. Najczęściej przez przedsiębiorcę." }
    ]
  },
  {
    number: 10,
    slug: "kapital-obrotowy",
    title: "Kapitał obrotowy bez podręcznikowych definicji",
    excerpt: "Kapitał obrotowy to w praktyce pieniądze zamrożone między zakupem, magazynem, sprzedażą i zapłatą klienta.",
    category: "Płynność i gotówka",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Kapitał obrotowy brzmi jak termin dla księgowych. W praktyce chodzi o bardzo prostą rzecz: ile pieniędzy firma musi zamrozić, zanim klient jej zapłaci." },
      { type: "paragraph", text: "Wyobraźmy sobie sklep. Kupuje towar za 50 tys. zł. Towar leży przez miesiąc na magazynie. Potem zostaje sprzedany klientowi, który płaci po kolejnych 30 dniach." },
      { type: "paragraph", text: "Od momentu zakupu towaru do otrzymania pieniędzy mijają dwa miesiące. Przez ten czas firma musi finansować te 50 tys. zł." },
      { type: "paragraph", text: "Jeśli dostawca da jej 30 dni terminu płatności, sytuacja się poprawia. Przez pierwszy miesiąc część finansowania zapewnia dostawca." },
      { type: "heading", text: "Trzy elementy, które warto śledzić" },
      { type: "list", items: ["Zapasy.", "Należności od klientów.", "Zobowiązania wobec dostawców."] },
      { type: "paragraph", text: "Im więcej pieniędzy jest zamrożonych w zapasach i niezapłaconych fakturach, tym większe finansowanie jest potrzebne." },
      { type: "paragraph", text: "Dlatego poprawa sytuacji finansowej nie zawsze wymaga zwiększenia sprzedaży. Czasem wystarczy szybciej sprzedawać zapasy, skrócić klientom terminy płatności, skuteczniej windykować należności albo wynegocjować lepsze terminy z dostawcami." },
      { type: "callout", text: "Dobre zarządzanie kapitałem obrotowym potrafi uwolnić gotówkę bez zdobycia choćby jednego dodatkowego klienta." }
    ]
  },
  {
    number: 11,
    slug: "obrot-rosnie-czy-zysk-tez",
    title: "Obrót rośnie. A czy firma naprawdę zarabia więcej?",
    excerpt: "Wzrost sprzedaży może oznaczać więcej pracy, większe ryzyko i… mniejszy zysk. Dlatego sam obrót to za mało.",
    category: "Rentowność i sprzedaż",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Firma sprzedała w zeszłym roku za 2 mln zł. W tym roku za 2,6 mln. Wzrost o 30%. Świetnie? Być może." },
      { type: "paragraph", text: "Załóżmy jednak, że przy sprzedaży 2 mln firma zarabiała 200 tys. zł, a przy sprzedaży 2,6 mln tylko 120 tys. Przedsiębiorca ma więcej klientów, więcej faktur, więcej pracowników i więcej problemów. A mniej zysku." },
      { type: "paragraph", text: "Sprzedaż można zwiększać poprzez rabaty, droższą reklamę, wejście do mniej rentownych segmentów albo obsługę klientów wymagających dużo dodatkowej pracy." },
      { type: "callout", text: "Dlatego wzrost sprzedaży zawsze warto zestawić przynajmniej z marżą albo zyskiem." },
      { type: "paragraph", text: "Jeśli sprzedaż rośnie o 30%, ale koszty rosną o 40%, wzrost może niszczyć wartość." },
      { type: "paragraph", text: "Jeszcze bardziej mylące są rekordowe miesiące. „Pierwszy raz przekroczyliśmy 300 tys. sprzedaży!” to sukces sprzedażowy. Z punktu widzenia właściciela ważniejsze pytanie brzmi jednak: ile z tych dodatkowych 100 tys. zł zostało w firmie?" },
      { type: "callout", label: "Zasada", text: "Liczy się wartościowa sprzedaż, a nie każda sprzedaż." }
    ]
  },
  {
    number: 12,
    slug: "marza-narzut-rentownosc",
    title: "Marża, narzut i rentowność — trzy pojęcia, które często są mylone",
    excerpt: "Kupujesz za 70 zł, sprzedajesz za 100 zł. Marża wynosi 30%, ale narzut już 42,9%. Skąd bierze się różnica?",
    category: "Rentowność i sprzedaż",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Kupujesz produkt za 70 zł. Sprzedajesz za 100 zł. Zarabiasz 30 zł. Jaka jest marża? 30%. A jaki jest narzut? Około 42,9%." },
      { type: "formula", lines: ["Marża = 30 zł / 100 zł = 30%", "Narzut = 30 zł / 70 zł ≈ 42,9%"] },
      { type: "paragraph", text: "To częste źródło błędów. Jeżeli przedsiębiorca mówi „dodaję 30% marży”, ale w praktyce mnoży koszt 70 zł przez 1,30, uzyska cenę 91 zł. Jego rzeczywista marża wyniesie wtedy tylko około 23%." },
      { type: "heading", text: "Co mierzą te pojęcia?" },
      { type: "list", items: ["Marża: jaka część sprzedaży zostaje po określonych kosztach?", "Narzut: o ile podniosłem cenę w stosunku do kosztu?", "Rentowność: szersza ocena opłacalności firmy, klienta, produktu czy inwestycji."] },
      { type: "paragraph", text: "W zarządzaniu warto używać przede wszystkim marży, ponieważ łatwo porównuje różne produkty i okresy. Trzeba jednak ustalić, jaką marżę liczymy." },
      { type: "paragraph", text: "Jeśli od ceny odejmujemy tylko zakup towaru, otrzymujemy jedną informację. Jeżeli odejmiemy również transport, prowizję handlowca i koszt obsługi — inną." },
      { type: "callout", text: "Dwie osoby mogą mówić o „marży 30%” i mieć na myśli zupełnie różne rzeczy. Zawsze ustal, jakie koszty uwzględniasz." }
    ]
  },
  {
    number: 13,
    slug: "rentownosc-klienta",
    title: "Który klient naprawdę na mnie zarabia?",
    excerpt: "Największy klient nie zawsze jest najlepszy. Rabaty, obsługa, reklamacje i termin płatności mogą zjadać pozornie atrakcyjną sprzedaż.",
    category: "Rentowność i sprzedaż",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Największy klient nie zawsze jest najlepszym klientem." },
      { type: "paragraph", text: "Wyobraźmy sobie dwóch kontrahentów. Klient A kupuje za 500 tys. zł rocznie, klient B za 250 tys. Na pierwszy rzut oka A jest dwa razy ważniejszy." },
      { type: "paragraph", text: "Ale A negocjuje duże rabaty, wymaga indywidualnych dostaw, regularnie składa reklamacje, angażuje handlowca i płaci po 75 dniach. Klient B kupuje standardową ofertę, prawie nie generuje dodatkowej obsługi i płaci po siedmiu dniach." },
      { type: "callout", text: "Po policzeniu wszystkich kosztów może się okazać, że mniejszy klient przynosi więcej zysku." },
      { type: "heading", text: "Co warto doliczyć do kosztu klienta?" },
      { type: "list", items: ["transport", "rabaty", "czas pracowników", "reklamacje", "niestandardowe zamówienia", "finansowanie długiego terminu płatności"] },
      { type: "paragraph", text: "Nie wszystko trzeba liczyć co do złotówki. Czasami wystarczy rozsądne przybliżenie." },
      { type: "paragraph", text: "Klient generujący 15% sprzedaży może wyglądać strategicznie, ale jeśli po uwzględnieniu obsługi daje 2% zysku, warto wiedzieć o tym przed kolejnymi negocjacjami." },
      { type: "callout", text: "Nie chodzi o natychmiastowe rezygnowanie z trudnych klientów. Chodzi o wiedzę, dzięki której można zmienić cenę, warunki dostawy, zakres obsługi albo termin płatności." }
    ]
  },
  {
    number: 14,
    slug: "rentownosc-produktu-uslugi",
    title: "Który produkt lub usługa naprawdę zarabia?",
    excerpt: "Duża sprzedaż nie gwarantuje wysokiej rentowności. Czasem najbardziej popularna usługa najbardziej obciąża firmę.",
    category: "Rentowność i sprzedaż",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Firma może być rentowna jako całość i jednocześnie tracić pieniądze na części swojej oferty. Problem polega na tym, że nierentowny produkt potrafi długo ukrywać się za dobrymi wynikami innych produktów." },
      { type: "paragraph", text: "Załóżmy, że firma sprzedaje dwa rodzaje usług. Usługa A kosztuje klienta 10 tys. zł i wymaga około 40 godzin pracy. Usługa B kosztuje 15 tys. zł, ale wymaga 120 godzin pracy, licznych poprawek i zaangażowania właściciela." },
      { type: "paragraph", text: "B daje większą sprzedaż. Ale może dawać mniejszy zysk." },
      { type: "callout", text: "Pierwsze pytanie: jakie koszty powstają dlatego, że wykonujemy tę konkretną usługę?" },
      { type: "list", items: ["materiały", "czas pracowników", "prowizje", "podwykonawcy", "transport"] },
      { type: "paragraph", text: "To daje pierwszą marżę. Następnie warto zastanowić się, ile produkt zużywa innych zasobów: administracji, powierzchni, czasu właściciela czy kapitału." },
      { type: "paragraph", text: "Nie chodzi o budowanie skomplikowanego systemu kalkulacji. W mikrofirmie często wystarczy podzielić ofertę na kilka grup i sprawdzić, gdzie naprawdę powstaje wynik." },
      { type: "paragraph", text: "Taka analiza może prowadzić do prostych decyzji: podnieść cenę, uprościć usługę, wycofać nierentowny wariant albo skierować sprzedaż na bardziej opłacalne produkty." },
      { type: "callout", text: "Czasami najlepszym sposobem na zwiększenie zysku firmy jest sprzedawać mniej tego, czego sprzedajemy dużo." }
    ]
  },
  {
    number: 15,
    slug: "koszty-stale-i-zmienne",
    title: "Koszty stałe i zmienne — po co przedsiębiorcy ta wiedza?",
    excerpt: "To rozróżnienie pokazuje, dlaczego spadek sprzedaży o 20% może obniżyć zysk nawet o 80%.",
    category: "Rentowność i sprzedaż",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Nie wszystkie koszty zachowują się tak samo. Czynsz za lokal zwykle nie zmieni się dlatego, że sprzedasz o jeden produkt więcej. Koszt materiału potrzebnego do tego produktu — tak." },
      { type: "paragraph", text: "Pierwszy koszt jest w dużej mierze stały. Drugi — zmienny. Po co to rozróżnienie? Bo pomaga przewidzieć, co stanie się z firmą, kiedy sprzedaż wzrośnie albo spadnie." },
      { type: "paragraph", text: "Załóżmy, że firma sprzedaje miesięcznie za 100 tys. zł. Koszty zmienne wynoszą 60 tys., a stałe 30 tys. Zysk to 10 tys." },
      { type: "formula", lines: ["100 tys. zł sprzedaży", "− 60 tys. zł kosztów zmiennych", "− 30 tys. zł kosztów stałych", "= 10 tys. zł zysku"] },
      { type: "paragraph", text: "Jeżeli sprzedaż spadnie o 20%, do 80 tys., koszty zmienne mogą spaść do około 48 tys. Koszty stałe nadal wyniosą jednak 30 tys. Zysk spadnie z 10 tys. do zaledwie 2 tys." },
      { type: "callout", text: "Sprzedaż zmniejszyła się o 20%. Zysk aż o 80%." },
      { type: "paragraph", text: "To pokazuje, dlaczego firmy z wysokimi kosztami stałymi są wrażliwe na spadki sprzedaży. Mechanizm działa również w drugą stronę: jeżeli firma ma już ludzi, lokal i maszyny, dodatkowa sprzedaż może dawać bardzo wysoką marżę." },
      { type: "paragraph", text: "Znajomość struktury kosztów pomaga podejmować decyzje dotyczące cen, zatrudnienia, inwestycji i ryzyka." }
    ]
  },
  {
    number: 16,
    slug: "prog-rentownosci",
    title: "Próg rentowności: ile muszę sprzedać, żeby wyjść na zero?",
    excerpt: "Jedna z najbardziej użytecznych liczb w małej firmie: poziom sprzedaży, od którego biznes zaczyna zarabiać.",
    category: "Rentowność i sprzedaż",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Załóżmy, że Twoja firma ma 30 tys. zł kosztów stałych miesięcznie. Na każdej sprzedaży za 100 zł po pokryciu kosztów bezpośrednich zostaje Ci 40 zł." },
      { type: "paragraph", text: "Te 40 zł musi najpierw pokryć koszty stałe. Dopiero potem zaczyna powstawać zysk." },
      { type: "formula", lines: ["30 000 zł kosztów stałych / 40% marży", "= 75 000 zł sprzedaży na próg rentowności"] },
      { type: "paragraph", text: "Przy sprzedaży poniżej 75 tys. firma traci. Przy 75 tys. wychodzi mniej więcej na zero. Powyżej tej wartości zaczyna zarabiać." },
      { type: "heading", text: "Możesz policzyć próg także w klientach lub zleceniach" },
      { type: "paragraph", text: "Jeśli średnio na jednym zleceniu pozostaje 3 tys. zł marży na pokrycie kosztów stałych, a koszty stałe wynoszą 30 tys., potrzebujesz około 10 zleceń miesięcznie." },
      { type: "callout", text: "Dziesięć zleceń pokrywa firmę. Jedenaste zaczyna zarabiać." },
      { type: "paragraph", text: "Próg rentowności jest szczególnie pomocny przed zwiększeniem kosztów stałych. Jeżeli zatrudnienie pracownika podniesie je z 30 do 40 tys., warto wcześniej policzyć, o ile musi wzrosnąć sprzedaż." }
    ]
  },
  {
    number: 17,
    slug: "czy-stac-mnie-na-pracownika",
    title: "Czy stać mnie na nowego pracownika?",
    excerpt: "Nie pytaj tylko o pensję. Policz pełny koszt i sprawdź, ile dodatkowej wartości musi powstać, aby zatrudnienie miało sens.",
    category: "Ludzie i koszty pracy",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Pytanie „Czy stać mnie na pracownika za 8 tys. zł brutto?” jest źle postawione. Prawdziwe pytanie brzmi: ile dodatkowej wartości ten pracownik musi wygenerować, aby zatrudnienie miało sens?" },
      { type: "paragraph", text: "Koszt firmy będzie wyższy od samego wynagrodzenia brutto. Dochodzą składki pracodawcy, sprzęt, miejsce pracy, systemy, szkolenia oraz czas wdrożenia. Do tego pracownik ma urlopy, może chorować i nie każda godzina jego pracy jest produktywna." },
      { type: "paragraph", text: "Załóżmy więc, że pełny miesięczny koszt zatrudnienia wynosi 12 tys. zł. Jeżeli firma osiąga 30% marży na dodatkowej sprzedaży, potrzeba około 40 tys. zł dodatkowej sprzedaży tylko po to, aby pokryć koszt pracownika." },
      { type: "formula", lines: ["12 000 zł pełnego kosztu / 30% marży", "= 40 000 zł dodatkowej sprzedaży"] },
      { type: "paragraph", text: "Ale pracownik może tworzyć wartość również inaczej. Może uwolnić czas właściciela, skrócić terminy realizacji, zmniejszyć liczbę błędów albo umożliwić przyjmowanie większej liczby klientów." },
      { type: "heading", text: "Decyzję oceń w dwóch wymiarach" },
      { type: "list", items: ["Koszt — stosunkowo łatwy do policzenia.", "Efekt — co ekonomicznie ma się zmienić dzięki zatrudnieniu."] },
      { type: "callout", text: "Najgorszy wariant to zatrudnienie „bo jest dużo pracy”, bez określenia, co ekonomicznie ma się dzięki temu zmienić." }
    ]
  },
  {
    number: 18,
    slug: "koszt-godziny-pracy",
    title: "Ile naprawdę kosztuje godzina pracy pracownika?",
    excerpt: "Pensja podzielona przez 168 godzin zwykle mocno zaniża koszt. W usługach liczy się koszt efektywnej godziny pracy.",
    category: "Ludzie i koszty pracy",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Pracownik zarabia 8 tys. zł brutto. Dzielimy przez około 168 godzin pracy miesięcznie. Wychodzi około 48 zł za godzinę. Czy tyle kosztuje firmę jego godzina? Nie." },
      { type: "paragraph", text: "Do wynagrodzenia dochodzą koszty pracodawcy. Ale to dopiero początek. Pracownik nie przepracuje produktywnie wszystkich godzin dostępnych w roku. Są urlopy, święta, szkolenia, choroby, spotkania, przerwy i czas organizacyjny." },
      { type: "paragraph", text: "Załóżmy, że całkowity miesięczny koszt pracownika wynosi 10 tys. zł. Nominalnie ma 168 godzin, ale rzeczywiście produktywnych godzin jest średnio 120." },
      { type: "formula", lines: ["10 000 zł całkowitego kosztu / 120 efektywnych godzin", "≈ 83 zł za efektywną godzinę"] },
      { type: "paragraph", text: "Jeżeli firma świadczy usługi, to bardzo ważna liczba. Sprzedawanie godziny pracy klientowi za 100 zł może wyglądać atrakcyjnie w stosunku do 48 zł wynagrodzenia brutto. Przy rzeczywistym koszcie 83 zł zostaje jednak tylko 17 zł na pokrycie administracji, biura, marketingu, sprzętu i zysku." },
      { type: "callout", text: "Do wyceny usług potrzebujemy kosztu efektywnej godziny pracy, a nie prostego podzielenia pensji przez liczbę godzin w miesiącu." }
    ]
  },
  {
    number: 19,
    slug: "jak-ustalic-cene",
    title: "Jak ustalić cenę, żeby nie pracować za darmo?",
    excerpt: "Cena nie powinna wynikać tylko z cennika konkurencji. Musi pokrywać koszt, koszty firmy, ryzyko i zostawiać miejsce na zysk.",
    category: "Cena i podatki",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Najprostsza metoda ustalania ceny wygląda tak: konkurencja bierze około 500 zł, więc my też ustawmy 500. Problem w tym, że nie wiesz, czy konkurencja na tej cenie zarabia. Nie wiesz też, czy ma takie same koszty." },
      { type: "heading", text: "Cena powinna uwzględniać co najmniej trzy rzeczy" },
      { type: "list", items: ["Koszt bezpośredni wykonania produktu lub usługi.", "Część kosztów funkcjonowania całej firmy.", "Zysk, który ma wynagrodzić właściciela za kapitał, ryzyko i rozwój biznesu."] },
      { type: "paragraph", text: "Załóżmy, że wykonanie usługi wymaga 10 godzin pracy po rzeczywistym koszcie 80 zł za godzinę. Koszt pracy to 800 zł. Do tego 200 zł innych kosztów. Łącznie 1000 zł." },
      { type: "paragraph", text: "Cena 1100 zł oznacza, że zostaje 100 zł. Czy to dużo? Nie wiemy. Z tych 100 zł trzeba jeszcze finansować marketing, księgowość, systemy IT, okresy bez zleceń i ryzyko reklamacji." },
      { type: "paragraph", text: "Dlatego „koszt + trochę” rzadko jest dobrą strategią. Cena powinna również uwzględniać wartość dla klienta. Jeżeli rozwiązujesz problem wart dla klienta 50 tys. zł, nie musisz wyceniać usługi wyłącznie na podstawie 10 godzin swojej pracy." },
      { type: "callout", label: "Trzy punkty odniesienia", text: "Najlepsza cena znajduje się gdzieś pomiędzy kosztem, wartością dla klienta i warunkami rynkowymi — a nie tylko w cenniku konkurencji." }
    ]
  },
  {
    number: 20,
    slug: "vat-nie-jest-przychodem",
    title: "VAT nie jest Twoim przychodem",
    excerpt: "Wpływ brutto na rachunek nie oznacza, że cała kwota jest sprzedażą ani wolną gotówką firmy.",
    category: "Cena i podatki",
    readTime: "4 min",
    blocks: [
      { type: "lead", text: "Wystawiasz klientowi fakturę: 10 000 zł netto + VAT = kwota brutto do zapłaty. Klient przelewa całą kwotę brutto. Na rachunku pojawia się więcej pieniędzy niż wynosi Twoja sprzedaż netto." },
      { type: "paragraph", text: "To może tworzyć złudzenie, że firma ma więcej gotówki, niż rzeczywiście ma do dyspozycji." },
      { type: "paragraph", text: "VAT jest bowiem w uproszczeniu podatkiem, który przedsiębiorca pobiera w ramach transakcji, a następnie rozlicza z urzędem skarbowym, uwzględniając również VAT związany z zakupami." },
      { type: "paragraph", text: "Dlatego sprzedaż analizuje się zwykle w wartościach netto, jeżeli przedsiębiorca jest czynnym podatnikiem VAT i ma prawo do odpowiednich odliczeń." },
      { type: "paragraph", text: "Wyobraźmy sobie firmę, która przez kilka tygodni szybko rośnie. Na rachunek wpływają duże kwoty brutto. Saldo wygląda świetnie. Właściciel kupuje samochód albo wypłaca część pieniędzy." },
      { type: "paragraph", text: "Kilka tygodni później pojawia się termin rozliczenia VAT i okazuje się, że znaczna część gotówki była potrzebna do rozliczeń podatkowych." },
      { type: "heading", text: "Oddziel dwie rzeczy" },
      { type: "list", items: ["Pieniądze firmy.", "Pieniądze, które chwilowo znajdują się na rachunku firmy, ale będą potrzebne na podatki i inne zobowiązania."] },
      { type: "paragraph", text: "W szczegółach zasady rozliczania VAT mogą zależeć od rodzaju transakcji, sposobu rozliczeń i statusu podatnika. Z punktu widzenia zarządzania najważniejsza pozostaje jednak prosta zasada." },
      { type: "callout", text: "Wpływ brutto na rachunek nie oznacza, że cała otrzymana kwota jest przychodem ani wolną gotówką firmy." }
    ]
  }
];

export const knowledgeCategories = [
  "Wszystkie",
  "Fundamenty finansów",
  "Płynność i gotówka",
  "Rentowność i sprzedaż",
  "Ludzie i koszty pracy",
  "Cena i podatki"
] as const;

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}
