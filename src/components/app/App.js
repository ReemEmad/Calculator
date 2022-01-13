import "./App.css"
import Display from "../display/Display"
import Keypad from "../keypad/Keypad"

function App({ displayValue, mode, trigUnit, ...keypadProps }) {
  return (
    <div className="App">
      <div className={`calculator ${mode}`}>
        <Display trigUnit={trigUnit} value={displayValue} mode={mode} />
        <Keypad trigUnit={trigUnit} {...keypadProps} />
      </div>
    </div>
  )
}

export default App
