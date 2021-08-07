import React from 'react';
import './App.css';

function ParseText(text: string) {
  const h3Open = '<h3>';
  const h3Close = '</h3>';
  const pOpen = '<p>';
  const pClose = '</p>';
  
  let lines = text.split('\n');
  let output = '';
  output = h3Open + lines[0] + h3Close + '\n';

  for (let i = 1; i < lines.length; i++) {
    if (lines[i] == 'References:') break;
    output += pOpen + '\n' + lines[i] + '\n' + pClose + '\n';
  }
  return output;
}

type MyState = {
  inputText: string;
  output: string;
}

class App extends React.Component {

  state: MyState = {
    inputText: '',
    output: ''
  }
            
  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      output: ParseText(this.state.inputText)
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <form>
            <label htmlFor="inputText">Input text here:</label>
              <textarea 
                name = "inputText"
                value = {this.state.inputText}
                onChange={this.handleChange}>
              </textarea>
          </form>
        </div>

        <div>
          <button onClick={this.handleClick}>
            Go
          </button>
        </div>

        <div>
          <label htmlFor="output">Output here:</label>
            <textarea 
              name="output"
              value={this.state.output}>
            </textarea>
        </div>
      </div>

        

            
              
            
    );
  }
}

export default App;
