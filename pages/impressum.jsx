import Layout from '../components/Layout';

export default function impressum() {
  return (
    <Layout title="impressum">
      <img
        className="logo"
        src="/img/logo@1x.jpg"
        srcSet="/img/logo@1x.jpg 1x, /img/logo@2x.jpg 2x"
        alt="Bildbeschreibung"
        loading="lazy"
        width="320"
        height="100"
      />
      <img
        className="image"
        src="https://picsum.photos/id/1011/900/450"
        srcSet="https://picsum.photos/id/1011/450/225 450w, https://picsum.photos/id/1011/900/450 900w, https://picsum.photos/id/1011/1350/675 1350w, https://picsum.photos/id/1011/1800/900 1800w"
        sizes="(max-width: 52rem) 90vw, 50rem"
        alt=""
        loading="lazy"
        width="2"
        height="1"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat
        quidem veniam eum numquam ea in porro aperiam voluptatem dolorum vero id
        saepe debitis repellendus assumenda nesciunt hic, fugit ullam?
      </p>
    </Layout>
  );
}
