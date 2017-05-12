import React from 'react';

class Buttons extends React.Component {
  constructor() {
    super();

    this.state = {
      showPage1: true,
      showPage2: false,
      showPage3: false
    }
    this.handleClickedPage1 = this.handleClickedPage1.bind(this);
    this.handleClickedPage2 = this.handleClickedPage2.bind(this);
  }

  handleClickedPage1() {
    console.log('clicked butotn 1');
    this.setState({
      showPage1: true,
      showPage2: false
    });
  }

  handleClickedPage2() {
    console.log('clicked button 2');
    this.setState({
      showPage1: false,
      showPage2: true
    });
  }

  // handleClickedPage2(props) {
    // console.log('state page1 ' + this.state);
    // console.log('state page2 ' + this.state.onPage2)
    // this.props.onPage2();
  // }

  render() {
    return (
      <div className="row">
        <button
          className='btn btn-primary btn-sm'
          onClick={ this.handleClickedPage1 }
        >Page 1</button>
        <button
          className='btn btn-primary btn-sm'
          onClick={ this.handleClickedPage2 }
        >Page 2</button>
        <button
          className='btn btn-primary btn-sm'
          //onClick={  }
        >Page 3</button>
      </div>
      )
  }
}

export default Buttons;
