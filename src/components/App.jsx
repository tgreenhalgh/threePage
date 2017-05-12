import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page1: true,
      page2: false,
      page3: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    var btn = e.target.name;
    this.setState({
      page1: (btn) === 'page1',
      page2: (btn) === 'page2',
      page3: (btn) === 'page3'
    });
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          {
            this.state.page1 ?
              <Page1 />
            : (this.state.page2 ?
                <Page2 />
              : <Page3 />
              )
          }
          <Buttons onClick={ this.onClick }/>
        </div>
      </div>
      )
  }
}

const Buttons = (props) => {
  return (
    <div>
      <button
        name='page1'
        className='btn btn-primary btn-sm'
        onClick={ props.onClick }
      >Page 1</button>
      <button
        name='page2'
        className='btn btn-primary btn-sm'
        onClick={ props.onClick }
      >Page 2</button>
      <button
        name='page3'
        className='btn btn-primary btn-sm'
        onClick={ props.onClick }
      >Page 3</button>
    </div>
  )
}

const Page1 = (props) => {
  return (
    <h1>You're on page 1!</h1>
  )
}

const Page2 = (props) => {
  return (
    <h1>You're on page 2!</h1>
  )
}

const Page3 = (props) => {
  return (
    <h1>You're on page 3!</h1>
  )
}

export default App;
