'use strict';

import React from 'react';

require('styles//NewsItem.less');

// class NewsItemComponent extends React.Component {
const NewsItemComponent = ({title}) => (
  <div className="newsitem-component">
    <wrapper>
    <div class="news-title"><span>{title}</span></div>
    </wrapper>
  </div>
);

NewsItemComponent.displayName = 'NewsItemComponent';

// Uncomment properties you need
// NewsItemComponent.propTypes = {};
// NewsItemComponent.defaultProps = {};

export default NewsItemComponent;
