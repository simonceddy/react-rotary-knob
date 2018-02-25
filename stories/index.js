import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Knob} from '../src/index';

const stories = storiesOf('Knob', module)

class KnobApp extends React.Component {

  state = {
    value: 0
  }

  changeValue(val) {
    this.setState({value:val})
  }

  render() {
    return <div style={{padding:'6rem'}}>
     <h2> Props </h2>
       <p>
       - min: 0
       - max: 100
       </p>
       <Knob style={{width:'50px', height:'50px', display:'inline-block'}} onChange={(val)=>{this.changeValue(val)}} min={0} max={100} value={this.state.value} /> 
       <hr/>
       <h2>{this.state.value.toFixed(2)} </h2>

    </div>
     
  }
}

stories.add('Basic', () => {
  let value = 50;
  function onChange(val) {
    value = val
  }

  return (
    <KnobApp />
  )
})

