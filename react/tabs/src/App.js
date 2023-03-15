import './App.css';
import { CenteredTabs } from './components/Tabs';

function App() {
  return(
    <div className="App">
      <CenteredTabs
        tabSections={[
          {label:'Tab 1', content: 'Tab 1 content is showing here'},
          {label:'Tab 2', content: 'Tab 2 content is showing here'},
          {label:'Tab 3', content: 'Tab 3 content is showing here'}        
        ]}
      />
    </div>
  );
}

export default App;
