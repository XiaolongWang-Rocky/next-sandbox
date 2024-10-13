'use client'
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Form />
      <ThemeController />
    </ThemeContext.Provider>
  )
}

function ThemeController() {
  const {theme, setTheme} = useContext(ThemeContext)
  return <label>
    <input
      type="checkbox"
      checked={theme === 'dark'}
      onChange={(e) => {
        setTheme(e.target.checked ? 'dark' : 'light')
      }}
    />
    Use dark mode
  </label>
}

function Form() {
  console.log(useContext(ThemeContext))
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const {theme} = useContext(ThemeContext);

  return (
    <section style={{backgroundColor: theme === 'light' ? 'white' : 'gray'}}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const {theme} = useContext(ThemeContext);
  
  return (
    <button style={{backgroundColor: theme === 'light' ? 'white' : 'gray'}}>
      {children}
    </button>
  );
}