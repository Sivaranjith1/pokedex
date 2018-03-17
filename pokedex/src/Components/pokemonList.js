import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getData} from '../actions/getData';

class PokeList extends Component {
  componentWillMount(){
    this.props.getData("")
  }

  test() {
    console.log(this.props.name)
  }

  render() {

    this.props.name && this.props.name.then(data => document.getElementById("count").innerHTML = "Count: " + data.count)
    return (
      this.props.name ?
        <div className="pokeList">
          <button onClick={ () => this.test()}>Test</button>
          <h1>Text</h1>
          {this.props.name.count !== null &&
            <div>
              <h1 id="count">Count </h1>
              {this.props.name.results && this.props.name.results.map(resultat => <h1 key={resultat.name}>{resultat.name} og {resultat.url}</h1>)}
            </div>
          }
        </div> : <div>Loading</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    //{count: 69, results: [{name: "pikachu", url:"hama"}]}
    name: state.name,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({getData: getData}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PokeList);
