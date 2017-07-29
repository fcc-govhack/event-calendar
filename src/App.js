import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';

const colors = [
  'blue',
  'red',
  'white',
  'black',
  'green',
  'yellow',
  'purple',
  'brown',
  'darkblue',
  'darkgreen',
  'darkred',
  'gray',
  'blue',
  'red',
  'white',
  'black',
  'green',
  'yellow',
  'purple',
  'brown',
  'darkblue',
  'darkgreen',
  'darkred',
  'gray'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    }
  }
  componentDidMount = () => {
    this.setState(prevState => ({
      items: prevState.items.length === 0 ? [] : prevState.push(...colors),
    }));
  }
  loadMore = () => {
    this.setState(prevState => ({
      items: prevState.push(...colors),
    }));
  }
  render() {
    return (
      <div className="App">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          useWindow={false}
        >
          {this.state.items.map(item => (
            <div style={{backgroundColor: {item}, height: 200}}/>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
