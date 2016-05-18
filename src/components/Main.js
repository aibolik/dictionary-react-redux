require('normalize.css');
require('styles/App.css');

import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import Dashboard from 'material-ui/lib/svg-icons/action/dashboard';
import RefreshIcon from 'material-ui/lib/svg-icons/navigation/refresh';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import moment from 'moment';

class AppComponent extends React.Component {

  componentDidMount() {
    const { actions } = this.props
    actions.fetchNews()
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
    //   const { dispatch, selectedSubreddit } = nextProps
    //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
    // }
  }

  render() {
    let {actions, news, selectedNews} = this.props;
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        display: selectedNews.id ? 'none': 'block'
      },
      gridList: {
        width: 450,
        height: '100%',
        overflowY: 'auto',
        // marginBottom: 24,
      },
      button: {
        margin: 12,
      }
    };

    return (
      <div className="index">

        <AppBar
          title="Dictionary"
          iconElementLeft={
            <IconButton
              touch={true}
              onTouchTap={actions.deselectNews.bind(this)}
            >
              {selectedNews.id ? <ArrowBack/> : <Dashboard/>}
            </IconButton>
          }
          iconElementRight={
            <IconButton onTouchTap={actions.fetchNews}>
            <RefreshIndicator
                  size={40}
                  left={-7}
                  top={-7}
                  status='loading'
                  style={{
                    zIndex: 100000,
                    position: 'relative',
                    display: news.isFetching ? 'block': 'none'
                  }}
                />
              <RefreshIcon />
            </IconButton>
          }
        />
        <div>
          <TextField
            hintText="Search Word"
          />
          <RaisedButton
          label="Label before"
          labelPosition="before"
          primary={true}
          />
        </div>
        <div style={{
          display: selectedNews.id ? 'block': 'none',
        }} className={"news-content"}>
          <h3>{ selectedNews.title }</h3>
          <div dangerouslySetInnerHTML={{__html: selectedNews.fulltext}} />
        </div>
        <div style={styles.root}>
          <GridList
            cols={1}
            cellHeight={200}
            padding={1}
            style={styles.gridList}
          >
            {news.items.map(news_item => (
              <GridTile
                key={news_item.id}
                title={news_item.title}
                subtitle={moment(news_item.pub_date).fromNow()}
                // actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                // actionPosition="right"
                titlePosition="bottom"
                // titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={news_item.image_url} onClick={actions.selectNews.bind(this, news_item)}/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
