import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesConfig } from './routes/routesConfig'

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        {routesConfig.map(({ page, url }) => (
                            <Route path={url} element={page} />
                        ))}
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
