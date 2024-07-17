import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './Context/Context';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Frame from './components/Frame';
import { data } from './components/db/dbs';
import {AData} from './components/db/AutomationData'
import Pipeline from './components/Pipeline';
import Automation from './components/Automation';

function App() {
  return (
    <div className="bg-black h-full w-full">
      <div className="bg-[#232222]">
        <GlobalProvider>
          <Router>
            <div className="flex">
              <Sidebar />
              <div className="bg-black flex-1 p-8 text-white min-h-screen w-screen -mt-2 ml-[200px] alin">
                <div className="fixed -mt-6 bg-black w-full z-10">
                  <Frame />
                </div>
                
                <Routes>
                  <Route path="/dashboard" element={<Dashboard data={data} />} />
                  <Route path="/social/*" element={<Pipeline/>} />
                  <Route path='/automation' element={<Automation data={data} />}/>
                </Routes>
              </div>
            </div>
          </Router>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
