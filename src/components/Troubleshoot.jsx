import React, { useEffect, useState } from "react";

const Troubleshoot = () => {
  const [errors, setErrors] = useState([]);
  const [resourceStatus, setResourceStatus] = useState({});

  useEffect(() => {
    // Listen for errors
    const handleError = (event) => {
      setErrors(prev => [...prev, {
        message: event.message,
        source: event.filename,
        line: event.lineno,
        time: new Date().toISOString()
      }]);
    };

    window.addEventListener('error', handleError);

    // Check for 3D context
    try {
      const canvas = document.createElement('canvas');
      const hasWebGL = !!(
        window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      
      setResourceStatus(prev => ({
        ...prev,
        webgl: hasWebGL ? 'Available' : 'Not available - This is needed for 3D models'
      }));
    } catch (e) {
      setResourceStatus(prev => ({
        ...prev,
        webgl: `Error checking: ${e.message}`
      }));
    }

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      zIndex: 10000,
      padding: '20px',
      fontFamily: 'monospace',
      maxHeight: '100vh',
      overflow: 'auto'
    }}>
      <h1>Troubleshooting</h1>
      
      <h2>System Info:</h2>
      <pre>Window Size: {window.innerWidth}x{window.innerHeight}</pre>
      
      <h2>Resource Status:</h2>
      <pre>{JSON.stringify(resourceStatus, null, 2)}</pre>
      
      <h2>Errors ({errors.length}):</h2>
      {errors.length === 0 ? (
        <p>No JavaScript errors detected yet.</p>
      ) : (
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      )}
      
      <button 
        style={{
          padding: '10px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
        onClick={() => {
          const root = document.getElementById('root');
          root.removeChild(document.querySelector('[data-troubleshoot="true"]'));
        }}
      >
        Close Troubleshooter
      </button>
    </div>
  );
};

export default Troubleshoot; 