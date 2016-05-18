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


import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');


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
    let {actions, news} = this.props;
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
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
            >
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
            label="Search"
            primary={true}
            icon={<ActionFlightTakeoff />}
            style={styles.button}
          />
        </div>
        <div style={styles.root}>
          <GridList
            cols={1}
            cellHeight={200}
            padding={1}
            style={styles.gridList}
          >
            {news.items.map(news_item => (
              <Card initiallyExpanded={true}>
                <CardHeader
                  id={news_item.id}
                  title={news_item.title}
                  subtitle="en,ru,kk"
                  actAsExpander={true}
                  showExpandableButton={true}>
                </CardHeader>
                <CardText expandable={true}>
                  An apple is a fruit that grows on trees
                </CardText>
                <CardActions expandable={true}>
                  <RaisedButton label="More"/>
                </CardActions>
              </Card>
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
