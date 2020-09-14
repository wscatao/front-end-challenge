/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const PostCards = (props) => {
  const { img, title, link } = props;
  const featuredMedia = 'wp:featuredmedia';
  const imgProps = img[featuredMedia][0];
  const { alt_text: altText, source_url: sourceUrl } = imgProps; 

  return (
    <div>
      <h2>{title}</h2>
      <img src={sourceUrl} alt={altText} />
      <a href={link}>Link</a>
    </div>
  );
};

export default PostCards;

PostCards.propTypes = {
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

/* {
  "title": "Como criar blocos reutilizáveis no Gutenberg",
  "img": {
    "author": [
      {
        "id": 4,
        "name": "Leandro Vieira",
        "url": "",
        "description": "Uma das grandes referências de WordPress no Brasil, entusiasta e evangelista da plataforma. Fundador e CEO da Apiki, empresa especializada no desenvolvimento web com WordPress.",
        "link": "https://blog.apiki.com/author/leandro/",
        "slug": "leandro",
        "avatar_urls": {
          "24": "https://secure.gravatar.com/avatar/7c37e8dfb88c9053d4935d73a180b13b?s=24&d=mm&r=g",
          "48": "https://secure.gravatar.com/avatar/7c37e8dfb88c9053d4935d73a180b13b?s=48&d=mm&r=g",
          "96": "https://secure.gravatar.com/avatar/7c37e8dfb88c9053d4935d73a180b13b?s=96&d=mm&r=g"
        },
        "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v14.9 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Leandro Vieira, Autor em Blog sobre WordPress</title>\n<meta name=\"description\" content=\"Leandro Vieira em Blog sobre WordPress - Escrito pelos especialistas em WordPress da Apiki -\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://blog.apiki.com/author/leandro/\" />\n<meta property=\"og:l...",
        "_links": "{collection: Array(1), self: Array(1)}"
      }
    ],
    "wp:featuredmedia": [
      {
        "id": 12987,
        "date": "2020-09-08T10:37:04",
        "slug": "como-criar-blocos-reutilizaveis-no-gutenberg-open-graph",
        "type": "attachment",
        "link": "https://blog.apiki.com/como-criar-blocos-reutilizaveis-no-gutenberg/como-criar-blocos-reutilizaveis-no-gutenberg-open-graph/",
        "title": "{rendered: \"Como-criar-blocos-reutilizáveis-no-Gute…}",
        "author": 129,
        "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v14.9 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph - Blog sobre WordPress</title>\n<meta name=\"robots\" content=\"noindex, follow\" />\n<meta property=\"og:locale\" content=\"pt_BR\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph - Blog sobre WordPress\" />\n<meta property=\"og:url\" content=\"https:/...",
        "caption": "{rendered: \"\"}",
        "alt_text": "Ilustração de blocos reutilizáveis",
        "media_type": "image",
        "mime_type": "image/png",
        "media_details": "{file: \"2020/09/Como-criar-blocos-reutilizáveis-no-…}",
        "source_url": "https://blog.apiki.com/wp-content/uploads/sites/2/2020/09/Como-criar-blocos-reutilizáveis-no-Gutenberg-open-graph.png",
        "_links": "{about: Array(1), author: Array(1), collection: Arr…}"
      }
    ],
    "wp:term": "[Array(1), Array(3)]"
  }
} */