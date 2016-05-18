'use strict';

import React from 'react';

require('styles//NewsItem.less');

// class NewsItemComponent extends React.Component {
const NewsItemComponent = ({image_url, title, pub_date}) => (
  <div className="newsitem-component">
    <wrapper>
    <img src={image_url} />
    <div class="news-title"><span>{title}</span></div>
    <div class="news-date"><span>{pub_date}</span></div>
    </wrapper>
  </div>
);

NewsItemComponent.displayName = 'NewsItemComponent';

// Uncomment properties you need
// NewsItemComponent.propTypes = {};
// NewsItemComponent.defaultProps = {};

export default NewsItemComponent;
