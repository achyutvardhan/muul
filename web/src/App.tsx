
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CubeProvider } from '@cubejs-client/react'
import cube from '@cubejs-client/core'
import BarChart from './pages/BarChart'
import LineChart from './pages/LineChart'
import PieChart from './pages/PieChart'
import './App.css'
import NavBar from './pages/NavBar'
import NoPage from './pages/NoPage'
import { useEffect, useState } from 'react'
import getToken from "./ts/getToken"
import Dashboard from './pages/Dashboard'
function App() {
  const [token, setToken] = useState<string>("");
  const [cubeApi, setCubeApi] = useState<any>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const fetchedToken = await getToken();
        setToken(fetchedToken);
      } catch (error) {
        alert(error);
      }
    }
    fetchToken()
  }, [])
  useEffect(() => {
    if (token) {
      const cubeApiInstance = cube(token, {
        apiUrl: "http://localhost:4000/cubejs-api/v1",
      });
      setCubeApi(cubeApiInstance);
    }
  }, [token]);
  console.log(cubeApi, token);

  if (!cubeApi) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CubeProvider cubeApi={cubeApi}>
        <Router>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route element={<BarChart />} index />
              <Route element={<Dashboard />} path='/dashboard' />
              <Route element={<LineChart />} path='/linechart' />
              <Route element={<PieChart />} path='/piechart' />
              <Route element={<NoPage />} path='*' />
            </Route>

          </Routes>
        </Router>
      </CubeProvider>
    </>
  )
}

export default App
