import React from 'react';
import './Footer.css';

export default function Footer(props) {
  const { creator, url } = props.values.footer;

  return (
    <div>
      <footer id="footer-page">
        <div className="text-center copyright">
          <h4>
            {creator}
            <a target="_blank" rel="noopener noreferrer" href={url}>
              {url}
            </a>
          </h4>
        </div>
      </footer>
      <br />
      <br />
    </div>
  );
}
