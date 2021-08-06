// import Layout from '../components/Layout';
// export async function getStaticProps() {
//   return {
//     props: {
//         test: "Hallo vom Server! 🐇",
//         time: new Date().toLocaleTimeString(),
//     },
//     revalidate: 5,
//   };
// }
// export default function news({time }) {
//   return <Layout title="news">{time}</Layout>;
// }


import Layout from '../components/Layout';
import NewsList from '../components/newsList';

//const apiKey = '2db3e0610d984bce92afc4143fbb8fe2';

const testResults = {
  status: 'ok',
  totalResults: 38,

  articles: [
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Chris Isidore, CNN Business',
      title: "Boeing's 737 Max gets approval to fly passengers again - CNN",
      description:
        "The Federal Aviation Administration Wednesday gave approval for the Boeing 737 Max to carry passengers again, ending the jet's 20-month grounding.",
      url: 'https://www.cnn.com/2020/11/18/business/boeing-737-max-approval/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/201116084430-boeing-737-max-southwest-restricted-super-tease.jpg',
      publishedAt: '2020-11-18T12:12:00Z',
      content: null,
    },

    {
      source: {
        id: null,
        name: 'HuffPost',
      },
      author: 'Yahoo Entertainment',
      title: "'MasterChef Junior' Star Ben Watkins Dies At Age 14 - HuffPost",
      description:
        '"MasterChef Junior" judge Gordon Ramsay hailed Watkins as "an incredibly talented home cook and even stronger young man."',
      url: 'https://www.huffpost.com/entry/ben-watkins-dead_n_5fb508edc5b66cd4ad40820e',
      urlToImage:
        'https://img.huffingtonpost.com/asset/5fb5105e2400008630b047cf.png?ops=1778_1000',
      publishedAt: '2020-11-18T11:59:00Z',
      content:
        'Ben Watkins, a fan-favorite from MasterChef Junior, died on Monday after an 18-month battle with cancer. He was 14.\r\nWatkins was diagnosed with angiomatoid fibrous histiocytoma, an extremely rare for… [+2665 chars]',
    },
  ],
};

export async function getStaticProps() {
 // let news = [];

  /*   try {
	const response = await fetch(
  	`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=de&category=technology&pageSize=10`
	);

	const newsData = await response.json();

	news = newsData.articles;
  } catch (error) {
	console.log(error);
  } */

  return {
    props: {
      test: 'Hallo vom Server! 👋',
      time: new Date().toLocaleTimeString(),
      news: testResults.articles,
    },
    revalidate: 600,
  };
}

export default function news({ news }) {
    return (
      <Layout title="News">
         {/* {JSON.stringify(news)} */}
        <NewsList news={news} title="News" />
      </Layout>
    );
}


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
