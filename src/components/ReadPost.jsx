import React from 'react';
import parse from 'html-react-parser';

const ReadPost = (props) => {
  const { title, content, autor } = props;
  const featuredmedia = 'wp:featuredmedia';
  const { alt_text: altText, source_url: sourceUrl } = autor[featuredmedia][0];
  const { rendered: header } = title;
  const { rendered: body } = content;
  const { name, description, avatar_urls } = autor.author[0];

  return (
    <div>
      <h1>{header}</h1>
      <figure>
        <img src={sourceUrl} alt={altText} />
      </figure>
      <article>{parse(body)}</article>
      <h4>
        Autor: {name}
        <img src={avatar_urls[48]} alt="gravatar" />
      </h4>
      <h4>Sobre o autor: {description}</h4>
    </div>
  );
};

export default ReadPost;
