import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import App from './components/App'
import './components/App.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <GlobalStyles/>
        <App/>
    </>
)
