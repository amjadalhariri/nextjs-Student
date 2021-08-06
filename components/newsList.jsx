/*
Mit Hilfe des useToggle-Hooks, den wir in der
Custom Hooks-Übung geschrieben haben, soll der Content-Bereich
ein- und ausgeblendet werden, der Text im Button soll entsprechend
wechseln. Anfangs soll der Content eingeklappt sein.
Der description-Text ist für "description", nicht "content" des
News-Objekts. Das Bild nur anzeigen, wenn eine Bildquelle vorhanden
ist. Das alt-Attribut kann leer bleiben, weil es im Datensatz leider
nicht enthalten ist.
Nutzt für das Bild die Image-Komponente von Next!
 
  <article class="news-item">
<h3 class="news-item__title">
  <a href="">Titel</a>
</h3>
<button>
 Weniger anzeigen / Mehr anzeigen
</button>
<div class="news-item__content">
<img class="news-item__image" src="" alt="" />
<p class="news-item__description">Nachrichtentext</p>
</div>
</article> */


import NewsItem from './NewsItem.jsx';


export default function NewsList({ news, title = '' }) {
  return (
    <section className="news-list">
      {title && <h2 className="news-list__title">{title}</h2>}
      {news.map((item) => (
        <NewsItem key={item.url} {...item} />
      ))}
    </section>
  );
}
