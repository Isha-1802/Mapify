// import React, { useState, useEffect } from 'react';

// const CreateMap = () => {
//   const [title, setTitle] = useState('Untitled Mind Map');
//   const [nodes, setNodes] = useState([]);

//   useEffect(() => {
//     const savedMap = localStorage.getItem('mapify-current-map');
//     if (savedMap) {
//       const parsed = JSON.parse(savedMap);
//       setTitle(parsed.title || 'Untitled Mind Map');
//       setNodes(parsed.nodes || []);
//     }
//   }, []);

//   const addNode = () => {
//     setNodes([...nodes, '']);
//   };

//   const updateNode = (index, text) => {
//     const updatedNodes = [...nodes];
//     updatedNodes[index] = text;
//     setNodes(updatedNodes);
//   };

//   // New: Remove node at index
//   const deleteNode = (index) => {
//     const updatedNodes = nodes.filter((_, i) => i !== index);
//     setNodes(updatedNodes);
//   };

//   const clearMap = () => {
//     setNodes([]);
//     setTitle('Untitled Mind Map');
//     localStorage.removeItem('mapify-current-map');
//   };

//   const saveMap = () => {
//     const mapData = { title, nodes };
//     localStorage.setItem('mapify-current-map', JSON.stringify(mapData));
//     alert('Map saved!');
//   };

//   const exportMap = () => {
//     const mapData = { title, nodes };
//     const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mapData, null, 2));
//     const downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataStr);
//     downloadAnchorNode.setAttribute("download", `${title.replace(/\s+/g, '_') || 'mind_map'}.json`);
//     document.body.appendChild(downloadAnchorNode);
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
//   };

//   return (
//     <div className="create-map-container">
//       <div className="map-toolbar">
//         <input
//           type="text"
//           className="map-title-input"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter map title"
//         />
//         <div className="actions">
//           <button className="btn" onClick={clearMap}>🗑️ Clear</button>
//           <button className="btn" onClick={exportMap}>⬇️ Export</button>
//           <button className="btn save-btn" onClick={saveMap}>💾 Save</button>
//         </div>
//       </div>

//       <div className="map-area">
//         <h3>Nodes</h3>
//         <button className="btn" onClick={addNode}>+ Add Node</button>
//         <ul className="node-list" style={{ listStyle: 'none', padding: 0 }}>
//           {nodes.length === 0 && <p>No nodes yet. Click "Add Node" to start.</p>}
//           {nodes.map((node, i) => (
//             <li key={i} style={{ margin: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
//               <input
//                 type="text"
//                 value={node}
//                 onChange={(e) => updateNode(i, e.target.value)}
//                 placeholder={`Node ${i + 1}`}
//                 style={{ flexGrow: 1, padding: '8px', fontSize: '1rem' }}
//               />
//               <button
//                 className="btn delete-node-btn"
//                 onClick={() => deleteNode(i)}
//                 title="Delete node"
//                 style={{
//                   backgroundColor: 'transparent',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontSize: '1.2rem',
//                   color: '#c00',
//                 }}
//               >
//                 🗑️
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CreateMap;
import React, { useState, useEffect } from 'react';

const CreateMap = () => {
  const [title, setTitle] = useState('Untitled Mind Map');
  const [nodes, setNodes] = useState([]);

  // Load saved map from localStorage on mount
  useEffect(() => {
    const savedMap = localStorage.getItem('mapify-current-map');
    if (savedMap) {
      const parsed = JSON.parse(savedMap);
      setTitle(parsed.title || '');
      setNodes(parsed.nodes || []);
    }
  }, []);

  // Auto-save map to localStorage on any change to title or nodes
  useEffect(() => {
    const mapData = { title, nodes };
    localStorage.setItem('mapify-current-map', JSON.stringify(mapData));
  }, [title, nodes]);

  const addNode = () => {
    setNodes([...nodes, '']);
  };

  const updateNode = (index, text) => {
    const updatedNodes = [...nodes];
    updatedNodes[index] = text;
    setNodes(updatedNodes);
  };

  const deleteNode = (index) => {
    const updatedNodes = nodes.filter((_, i) => i !== index);
    setNodes(updatedNodes);
  };

  const clearMap = () => {
    setNodes([]);
    setTitle('Untitled Mind Map');
    localStorage.removeItem('mapify-current-map');
  };

  const saveMap = () => {
    // Since we auto-save, this is optional but can still give feedback
    alert('Map saved!');
  };

  const exportMap = () => {
    const mapData = { title, nodes };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mapData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${title.replace(/\s+/g, '_') || 'mind_map'}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="create-map-container">
      <div className="map-toolbar">
        <input
          type="text"
          className="map-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter map title"
        />
        <div className="actions">
          <button className="btn" onClick={clearMap}>🗑️ Clear</button>
          <button className="btn" onClick={exportMap}>⬇️ Export</button>
          <button className="btn save-btn" onClick={saveMap}>💾 Save</button>
        </div>
      </div>

      <div className="map-area">
        <h3>Nodes</h3>
        <button className="btn" onClick={addNode}>+ Add Node</button>
        <ul className="node-list" style={{ listStyle: 'none', padding: 0 }}>
          {nodes.length === 0 && <p>No nodes yet. Click "Add Node" to start.</p>}
          {nodes.map((node, i) => (
            <li key={i} style={{ margin: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                type="text"
                value={node}
                onChange={(e) => updateNode(i, e.target.value)}
                placeholder={`Node ${i + 1}`}
                style={{ flexGrow: 1, padding: '8px', fontSize: '1rem' }}
              />
              <button
                className="btn delete-node-btn"
                onClick={() => deleteNode(i)}
                title="Delete node"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#c00',
                }}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateMap;
