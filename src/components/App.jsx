import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page1: true,
      page2: false,
      page3: false,
      name: ''
    };

    this.onClick = this.onClick.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  onClick(e) {
    var btn = e.target.name;
    this.setState({
      page1: (btn) === 'page1',
      page2: (btn) === 'page2',
      page3: (btn) === 'page3'
    });
  }

  updateName(e) {
      e.preventDefault();
      this.setState({
        name: e.target.value
      });
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          {
            this.state.page1 ?
              <Page1 updateName={ this.updateName } userName={ this.state.name }/>
            : (this.state.page2 ?
                <Page2 userName={ this.state.name }/>
              : <Page3 userName={ this.state.name }/>
              )
          }
          <Buttons onClick={ this.onClick }/>
          <h1>Name: { this.state.name }</h1>
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

class Page1 extends React.Component {
  render() {
    return (
      <div>
        <h1>You're on page 1 { this.props.userName }!</h1>
        <input
          type='text'
          onChange={ this.props.updateName }
        />
      </div>
    )
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <h1>You're on page 2 { this.props.userName }!</h1>
    )
  }
}

class Page3 extends React.Component {
  render() {
    return (
      <h1>You're on page 3 { this.props.userName }!</h1>
    )
  }
}

export default App;
