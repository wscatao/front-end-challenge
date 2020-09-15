import React from 'react';
import parse from 'html-react-parser';

import '../css/ReadPost.css';

const ReadPost = (props) => {
  const { title, content, autor } = props;
  const featuredmedia = 'wp:featuredmedia';
  const { alt_text: altText, source_url: sourceUrl } = autor[featuredmedia][0];
  const { rendered: header } = title;
  const { rendered: body } = content;
  const { name, description, avatar_urls } = autor.author[0];

  return (
    <div className="readpost">
      <div className="readpost__header">
        <h1 className="readpost__title">{header}</h1>
      </div>
      <article className="readpost__article">{parse(body)}</article>
      <div className="readpost__footer">
        <div className="readpost__card">
          <img
            className="readpost__card__gravatar"
            src={avatar_urls[48]}
            alt="gravatar"
          />
          <h2 className="readpost__card__author">{name} &darr;</h2>
          <div className="readpost__card__description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ReadPost;
