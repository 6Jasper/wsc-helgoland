import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Satzung" };

const PARAGRAPHEN = [
  {
    no: "§ 1",
    title: "Name, Sitz, Geschäftsjahr",
    body: [
      "Der Verein trägt den Namen „Wassersportclub Helgoland e.V.“",
      "Der Verein ist in das Vereinsregister bei dem Amtsgericht Pinneberg eingetragen (VR-Nr. 591). Sitz des Vereins ist Helgoland.",
      "Das Geschäftsjahr ist das Kalenderjahr.",
    ],
  },
  {
    no: "§ 2",
    title: "Vereinszweck, Vereinstätigkeit",
    body: [
      "Zweck des Vereins ist die Förderung des Wassersports und der Wassersportjugend. Dabei verfolgt der Verein ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne der §§ 51 ff der Abgabenordnung.",
      "Der Verein ist selbstlos tätig. Er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke. Mittel des Vereins sowie etwaige Überschüsse werden nur für satzungsmäßige Zwecke verwendet. Die Mitglieder erhalten keine Anteile am Überschuss und in ihrer Eigenschaft als Mitglieder auch keine sonstigen Zuwendungen aus den Mitteln des Vereins. Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.",
      "Mitglieder der Vereinsorgane haben jedoch Anspruch auf Ersatz der ihnen entstandenen notwendigen Auslagen und Aufwendungen. Für den Zeitaufwand der Mitglieder der Vereinsorgane kann die Mitgliederversammlung eine in ihrer Höhe angemessene Vergütung beschließen.",
      "Ausgeschiedene oder ausgeschlossene Mitglieder haben keinen Anspruch auf das Vereinsvermögen. Eine Änderung im Status der Gemeinnützigkeit zeigt der Verein unverzüglich dem Landessportverband Schleswig-Holstein e.V., den zuständigen Fachverbänden sowie dem Finanzamt Pinneberg an.",
      "Die Verwirklichung seines Zwecks sieht der Verein insbesondere in der Förderung sportlicher Übungen und Leistungen für seine Mitglieder, hier vor allem der Jugendlichen im Wassersport, in der Ausbildung seiner Mitglieder in theoretischer und praktischer Hinsicht, in der Durchführung von Sportveranstaltungen im Trainings- und Wettkampfbereich sowie in der Errichtung, der Unterhaltung und dem Betrieb von Sportanlagen und den dazugehörigen Nebeneinrichtungen.",
    ],
  },
  {
    no: "§ 3",
    title: "Stander",
    body: [
      "Der Verein führt als Stander einen weißen Wimpel mit schwarzem Balkenkreuz. Im Schnittpunkt des Balkenkreuzes wird das Helgoländer Wappen gezeigt. Jedes in das Bootsregister des Vereins eingetragene Boot ist berechtigt, den Stander unter Beachtung der bestehenden Vorschriften zu führen.",
    ],
  },
  {
    no: "§ 4",
    title: "Mitgliedschaft",
    body: [
      "Mitglied des Vereins kann jede natürliche und juristische Person werden.",
      "Der Verein gliedert sich in aktive Mitglieder (erwachsene und jugendliche Mitglieder) und fördernde Mitglieder.",
      "Wer das 18. Lebensjahr noch nicht vollendet hat, kann als jugendliches Mitglied aufgenommen werden. Ein jugendliches Mitglied wird nach Vollendung des 18. Lebensjahres ohne erneuten Aufnahmeantrag erwachsenes Mitglied des Vereins, wenn es nicht ausdrücklich seinen Austritt erklärt.",
      "Eine juristische Person kann nur als förderndes Mitglied aufgenommen werden.",
    ],
  },
  {
    no: "§ 5",
    title: "Erwerb der Mitgliedschaft",
    body: [
      "Die Aufnahme in den Verein ist beim Vorstand schriftlich zu beantragen. Der Aufnahmeantrag muss von zwei aktiven, erwachsenen Mitgliedern befürwortet sein. Über die Aufnahme entscheidet die Mitgliederversammlung, es sei denn, diese hat die Entscheidung generell oder im Einzelfall übertragen. Eine Übertragung der Entscheidung ist möglich auf den Vorstand oder, wenn Sparten eingerichtet sind, auf die Sparte. Ist die Entscheidung auf die Sparte übertragen, entscheidet die Spartenversammlung. Die Übertragung der Entscheidungsbefugnis ist im Einzelfall oder generell durch die Mitgliederversammlung widerruflich.",
      "Wer das 18. Lebensjahr noch nicht vollendet hat, hat die Zustimmung seines gesetzlichen Vertreters für die Aufnahme schriftlich nachzuweisen.",
      "Die Ablehnung eines Antrags ist nicht anfechtbar.",
    ],
  },
  {
    no: "§ 6",
    title: "Rechte und Pflichten der Mitglieder",
    body: [
      "Alle Mitglieder des Vereins sind verpflichtet, die Satzung des Vereins und die Vereinsbeschlüsse, Vereinsregelungen sowie geltende Gesetze und Anordnungen der übergeordneten Stellen zu beachten und tatbereit bei der Verfolgung der Zwecke des Vereins mitzuarbeiten sowie den Verein und den Wassersport in jeder Beziehung zu unterstützen.",
      "Alle aktiven Mitglieder haben das Recht, die Einrichtungen des Vereins unter Beachtung der bestehenden Bestimmungen zu nutzen.",
    ],
  },
  {
    no: "§ 7",
    title: "Beendigung der Mitgliedschaft",
    body: [
      "Die Mitgliedschaft endet durch Tod (bei natürlichen Personen) bzw. Auflösung oder Löschung (bei juristischen Personen).",
      "Sie endet durch Austritt, der nur mit einer Frist von mindestens 30 Tagen zum Schluss des Geschäftsjahres durch schriftliche Austrittserklärung an den Vorstand zulässig ist.",
      "Sie endet durch Ausschluss, der durch die Mitgliederversammlung ausgesprochen werden kann, sofern ein Mitglied die Belange des Vereins schädigt oder die Verbundenheit der Mitglieder untereinander stört oder ehrwidrige Handlungen begeht. Über das Vorliegen eines solchen Grundes entscheidet die Mitgliederversammlung. Zudem kann der Vorstand einen Ausschluss aussprechen, sofern ein Mitglied trotz schriftlicher Mahnung länger als sechs Monate ab dem Zugang der Mahnung mit seinem Beitrag im Rückstand bleibt. Mit Beschluss über den Ausschluss gilt die Mitgliedschaft als beendet. Das ausgeschlossene Mitglied hat bis zu diesem Zeitpunkt seine Verpflichtungen gegenüber dem Verein voll und ganz zu erfüllen.",
    ],
  },
  {
    no: "§ 8",
    title: "Beitragswesen",
    body: [
      "Der in der von der Mitgliederversammlung zu beschließenden Beitrags- und Gebührenordnung festgelegte Jahresbeitrag wird Anfang April eines jeden Jahres zur Zahlung fällig. Außerdem wird ein Aufnahmebeitrag erhoben, welcher mit dem ersten Jahresbeitrag, der nach der Entscheidung über die Aufnahme zu zahlen ist, zur Zahlung fällig wird. Erfüllungsort für die Verpflichtungen der Mitglieder ist der Sitz des Vereins.",
    ],
  },
  {
    no: "§ 9",
    title: "Organe",
    body: [
      "Organe des Vereins sind der Vorstand, der Beirat und die Mitgliederversammlung.",
      "Die Mitgliederversammlung kann die Bildung weiterer Vereinsorgane beschließen. Zur besseren Organisation und Optimierung der spezifischen Vereinsaktivitäten können insbesondere Sparten gebildet werden, die unter Berücksichtigung des Grundkonzeptes des Vereins die Vereinsarbeit untergliedern.",
    ],
  },
  {
    no: "§ 10",
    title: "Vorstand",
    body: [
      "Der Vorstand besteht aus einem Vorsitzenden, einem stellvertretenden Vorsitzenden und einem Schatzmeister. Mitglieder des Vorstandes können nur natürliche, unbeschränkt geschäftsfähige Personen sein, welche zugleich aktive Mitglieder des Vereins sind.",
      "Die Mitglieder des Vorstandes werden durch die Mitgliederversammlung auf zwei Jahre gewählt. Eine Wiederwahl ist zulässig. In der Mitgliederversammlung sind alle Vorstandsmitglieder in geheimer Wahl zu wählen. Außer durch den Tod, Ablauf einer Wahlperiode oder Verlust der unbeschränkten Geschäftsfähigkeit erlischt das Amt eines Vorstandsmitgliedes unmittelbar mit dem Austritt oder Ausschluss aus dem Verein oder wenn das Mitglied nur noch förderndes Mitglied des Vereins ist. Die Mitgliederversammlung kann ferner jederzeit durch Wahl eines neuen Vorstandes oder eines einzelnen Vorstandsmitglieds den gesamten Vorstand oder ein einzelnes Vorstandsmitglied des Amtes entheben.",
      "Ein Vorstandsmitglied kann seinen Rücktritt schriftlich erklären. Die Rücktrittserklärung ist an ein verbleibendes Vorstandsmitglied, im Falle des Rücktritts des gesamten Vorstands an die Mitgliederversammlung zu richten. Die Rücktrittserklärung wird einen Monat nach Eingang wirksam. Das Vorstandsmitglied führt die Geschäfte über die Monatsfrist hinaus weiter, sofern eine wirksame Neuwahl noch nicht stattgefunden hat.",
      "Der Verein wird durch die Mehrheit der Vorstandsmitglieder vertreten. Die Geschäfte sind nach Maßgabe der Satzung sowie des von der Mitgliederversammlung beschlossenen Haushalts zu führen. Die Vertretungsmacht des Vorstands ist mit Wirkung gegen Dritte beschränkt, so dass für Rechtsgeschäfte mit einem Geschäftswert von über 30.000,00 EUR die Zustimmung der Mitgliederversammlung erforderlich ist.",
      "Vorstandsitzungen können mit einwöchiger Frist in Textform (Brief, Fax, E-Mail) von jedem Vorstandsmitglied unter Benennung der vorgesehenen Tagesordnung einberufen werden. Der Vorstand ist beschlussfähig, wenn alle Mitglieder anwesend sind. Beschlüsse werden mit einfacher Mehrheit gefasst und sind schriftlich zu protokollieren.",
      "Die Geschäfts- und Kassenführung des Vorstands wird einmal jährlich durch die Kassenprüfer überprüft, welche von der Mitgliederversammlung bestimmt werden und dieser berichten.",
      "Vorstandsmitglieder dürfen auch anderweitige Ämter innerhalb des Vereins wahrnehmen.",
    ],
  },
  {
    no: "§ 11",
    title: "Beirat",
    body: [
      "Der Beirat besteht, soweit Sparten gebildet sind, aus den jeweiligen Spartenleitern bzw. ihren Vertretern. Der Vorstand kann weitere Mitglieder in den Beirat berufen.",
      "Dem Beirat obliegen die Beratung des Vorstands in wichtigen Vereinsangelegenheiten, die Unterrichtung über die Anliegen der Vereinsmitglieder und die Unterbreitung von Vorschlägen für die Vereinsführung.",
      "Der Vorstand soll den Beirat zu den Vorstandssitzungen einladen. Der Beirat muss mindestens einmal jährlich vor Saisonbeginn zu einer Vorstandssitzung eingeladen werden, mit der die Mitgliederversammlung vorbereitet wird.",
    ],
  },
  {
    no: "§ 12",
    title: "Mitgliederversammlung",
    body: [
      "Eine ordentliche Mitgliederversammlung (Jahreshauptversammlung) wird vom Vorstand mindestens einmal im Jahr einberufen. Sie soll im ersten Quartal des Kalenderjahres stattfinden.",
      "Eine außerordentliche Mitgliederversammlung ist unverzüglich einzuberufen, wenn weniger als zwei Vorstandsmitglieder verbleiben. Der Vorstand ist auch verpflichtet, eine außerordentliche Mitgliederversammlung einzuberufen, wenn dies schriftlich unter Angabe des Zwecks und der Gründe von mehr als einem Fünftel der Mitglieder verlangt wird.",
      "Die Einladung erfolgt in Textform. Die Einladungsfrist beträgt mindestens drei Wochen, in Fällen besonderer Dringlichkeit mindestens drei Tage.",
      "Die Mitgliederversammlung ist unabhängig von der Zahl der erschienenen wahlberechtigten Mitglieder beschlussfähig.",
      "In der Mitgliederversammlung haben fördernde Mitglieder nur beratende Stimme. Bei Vorstandswahlen und in Fällen, in denen die Mitgliederversammlung dies ausdrücklich beschließt, sind alle Mitglieder stimmberechtigt. Jugendliche Mitglieder haben kein Stimmrecht.",
      "Sofern das Gesetz oder diese Satzung nicht entgegensteht, werden alle Beschlüsse mit einfacher Mehrheit der abgegebenen Stimmen der erschienenen, wahlberechtigten Mitglieder gefasst. Anträge auf Änderung der Satzung können vom Vorstand oder von mindestens einem Fünftel der Mitglieder gestellt werden. Dem Antrag ist stattzugeben, wenn in der Mitgliederversammlung zwei Drittel der anwesenden Mitglieder zustimmen.",
    ],
  },
  {
    no: "§ 13",
    title: "Sparten",
    body: [
      "Sind Sparten gebildet, sollen diese sich für die Ausübung des Vereinszwecks innerhalb des Vereins weitestgehend selbst organisieren. Es sind zumindest ein Spartenleiter und ein technischer Leiter, welcher gleichzeitig Vertreter des Spartenleiters ist, zu wählen.",
      "Ist eine Jugendsparte gebildet, verbleibt das Recht, einen Jugendwart (Spartenleiter) zu wählen, bei der Mitgliederversammlung.",
      "Die jeweiligen Spartenleiter sollen die Spartenmitglieder nach Bedarf formlos über Aushänge auf der Insel und Veröffentlichung im Internet zu Spartenversammlungen einberufen.",
    ],
  },
  {
    no: "§ 14",
    title: "Auflösung",
    body: [
      "Die Auflösung des Vereins ist nur möglich, wenn mindestens 50 % der Mitglieder einen entsprechenden Antrag schriftlich beim Vorstand einen Monat vor der Hauptversammlung eingebracht und drei Viertel der anwesenden Mitglieder zugestimmt haben. Ein Beschluss über die Auflösung kann nur dann gefasst werden, wenn in der Mitgliederversammlung mindestens zwei Drittel aller Mitglieder anwesend sind. Andernfalls ist eine zweite Mitgliederversammlung innerhalb von vier Wochen, frühestens 90 Stunden nach Beendigung der ersten, mit gleicher Tagesordnung durchzuführen, die ohne Rücksicht auf die Zahl der anwesenden Mitglieder mit einfacher Mehrheit beschließen kann.",
      "Im Falle der Auflösung des Vereins sind die im Amt befindlichen Vorstandsmitglieder die Liquidatoren.",
      "Bei Auflösung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an die Gemeinde Helgoland, die es unmittelbar und ausschließlich für gemeinnützige Zwecke im Bereich Wassersport auf Helgoland zu verwenden hat.",
    ],
  },
  {
    no: "§ 15",
    title: "Gerichtsstand",
    body: [
      "Für Streitigkeiten zwischen dem Verein und den Mitgliedern ist das Amtsgericht Pinneberg zuständig.",
    ],
  },
];

export default function SatzungPage() {
  return (
    <>
      <PageHero
        title={<>Satzung.</>}
        lead="Beschlossen in der Jahreshauptversammlung am 7. März 2014 und durch Vorstandsbeschluss vom 7. Juli 2014. Verbindlich ist die im Vereinsregister hinterlegte Originalfassung."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="Vereinsanlage am Südhafen"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <Reveal variant="cinematic">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-5">Inhalt</div>
              <ul className="space-y-2">
                {PARAGRAPHEN.map((p) => (
                  <li key={p.no}>
                    <a
                      href={`#${p.no.replace(/\s|§/g, "")}`}
                      className="text-[13px] text-text-muted hover:text-text-primary transition-colors block py-1"
                    >
                      <span className="text-text-dim mr-2">{p.no}</span>
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/dokumente/wsch-satzung-2014.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-5 py-3 text-[13px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>PDF herunterladen</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
            </aside>
          </Reveal>

          <div className="space-y-16 md:space-y-20">
            {PARAGRAPHEN.map((p, i) => (
              <Reveal key={p.no} variant="cinematic" delay={Math.min(i * 0.03, 0.3)}>
                <article id={p.no.replace(/\s|§/g, "")} className="scroll-mt-32">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">{p.no}</div>
                  <h2 className="mt-2 m-0 text-text-primary font-light" style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                    {p.title}
                  </h2>
                  <div className="mt-6 space-y-5 max-w-prose">
                    {p.body.map((para, j) => (
                      <p key={j} className="text-text-body text-[15px] md:text-[16px] leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
