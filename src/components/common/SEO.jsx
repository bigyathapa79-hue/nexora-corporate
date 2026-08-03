import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image = "/cover.jpg",
  url = "https://your-domain.vercel.app",
}) => {
  const pageTitle = title
    ? `${title} | Nexora`
    : "Nexora | Building Digital Excellence";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{pageTitle}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta name="author" content="Nexora" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={pageTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={pageTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
