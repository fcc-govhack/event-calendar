import React, { Component } from 'react'
import { InfiniteLoader, List } from 'react-virtualized'

import EventCard from './EventCard'

const STATUS_LOADING = 1;
const STATUS_LOADED = 2;

class Loader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loadedItems: [],
      loadedRowCount: 0,
      loadingItemsMap: {},
      loadingRowCount: 0,
    }

    this._timeoutIdMap = {};
  }

  noRowsRenderer = () => {
    return <div>No Events</div>;
  }

  rowRenderer = ({ index, isScrolling, key, style }) => {
    // const { showScrollingPlaceholder, useDynamicRowHeight } = this.state;
    console.log(index)
    const event = this.state.loadedItems[index]

    if (false && isScrolling) {
      return (
        <div
          key={key}
          style={style}
        >
          Scrolling...
        </div>
      );
    }

    return (
      <EventCard key={key} event={event} />
    );
  }

  isRowLoaded = ({ index }) => {
    return !!this.state.loadedItems[index]
  }

  loadMoreRows = ({ startIndex, stopIndex }) => {
    this.setState((prevState, props) => ({
      loadedItems: [...prevState.loadedItems, ...props.events.splice(startIndex, stopIndex)]
    }))
  }

  loadMoreRows = ({ startIndex, stopIndex }) => {
    const { loadedRowsMap, loadingRowCount } = this.state;
    const increment = stopIndex - startIndex + 1;

    for (var i = startIndex; i <= stopIndex; i++) {
      loadedRowsMap[i] = STATUS_LOADING;
    }

    this.setState({
      loadingRowCount: loadingRowCount + increment
    });

    const timeoutId = setTimeout(() => {
      const { loadedRowCount, loadingRowCount } = this.state;

      delete this._timeoutIdMap[timeoutId];

      for (var i = startIndex; i <= stopIndex; i++) {
        loadedRowsMap[i] = STATUS_LOADED;
      }

      this.setState({
        loadingRowCount: loadingRowCount - increment,
        loadedRowCount: loadedRowCount + increment
      });

      promiseResolver();
    }, 1000 + Math.round(Math.random() * 2000));

    this._timeoutIdMap[timeoutId] = true;

    let promiseResolver;

    return new Promise(resolve => {
      promiseResolver = resolve;
    });
  }

  render() {
    const { events } = this.props
    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        minimumBatchSize={10}
        threshold={15}
        rowCount={10000}
      >
      {({ onRowsRendered, registerChild }) => (
        <List
          ref={registerChild}
          onRowsRendered={onRowsRendered}
          style={{ margin: '0 auto' }}
          height={1240 * events.length}
          rowHeight={1240}
          overscanRowCount={1}
          noRowsRenderer={this.noRowsRenderer}
          rowCount={events.length}
          rowRenderer={this.rowRenderer}
          width={800}
        />
      )}
        
      </InfiniteLoader>
    )
  }
}

export default Loader
