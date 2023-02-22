import { useEffect } from 'react';
import './App.css';

function App() {

  setTimeout(() => {
    window.location.href = "https://kamal98eth.github.io/loading-portfolio/"
  }, 4500)

  return (
    <div className="App">
      <div class="container">
        <div class="windows-logo">
          <div class="logo">
            <div class="window">
              <div class="red-convex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#FD6807" fill-opacity="1" d="M 0 200 Q 380 30 485 200 "></path>
                </svg>
              </div>
              <div class="window-logo red"></div>
              <div class="red-concave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#000" fill-opacity="1" d="M 0 200 Q 380 30 485 200 "></path>
                </svg>
              </div>
            </div>
            <div class="window">
              <div class="blue-convex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#4068FD" fill-opacity="1" d="M 0 200 Q 380 30 485 200 "></path>
                </svg>
              </div>
              <div class="window-logo blue"></div>
              <div class="blue-concave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#000" fill-opacity="1" d="M 0 200 Q 380 30 485 200 "></path>
                </svg>
              </div>
            </div>
            <div class="window">
              <div class="green-concave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
                  <path fill="#000" fill-opacity="1" d="M 0 200 Q 172 370 485 200"></path>
                </svg>
              </div>
              <div class="window-logo green"></div>
              <div class="green-convex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
                  <path fill="#9CEF09" fill-opacity="1" d="M 0 200 Q 172 370 485 200"></path>
                </svg>
              </div>
            </div>
            <div class="window">
              <div class="yellow-concave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
                  <path fill="#000" fill-opacity="1" d="M 0 200 Q 172 370 485 200"></path>
                </svg>
              </div>
              <div class="window-logo yellow"></div>
              <div class="yellow-convex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
                  <path fill="#FFD013" fill-opacity="1" d="M 0 200 Q 172 370 485 200"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="logo-text">
            <h3>Microsoft<span class="trademark microsoft-trademark">&reg;</span></h3>
            <h1>Windows<span class="trademark windows-trademark">&reg;</span></h1>
            <h2>xp</h2>
          </div>
        </div>
        <div class="loading-bar">
          <div class="loading-component"></div>
          <div class="loading-component"></div>
          <div class="loading-component"></div>
        </div>
        <div class="copyrights">
          <div class="microsoft-copyright">
            <p>Copyright &copy; Microsoft Corporation</p>
          </div>
          <div class="microsoft">
            <p>Microsoft</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
