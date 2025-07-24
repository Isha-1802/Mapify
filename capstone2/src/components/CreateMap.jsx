import React, { useState, useEffect } from 'react';

const CreateMap = () => {
  const [title, setTitle] = useState('');
  const [nodes, setNodes] = useState([]);
  const [isFirstFocus, setIsFirstFocus] = useState(true);

  // Load saved map from localStorage on mount
  useEffect(() => {
    const savedMap = localStorage.getItem('mapify-current-map');
    if (savedMap) {
      const parsed = JSON.parse(savedMap);
      setTitle(parsed.title || '');
      setNodes(parsed.nodes || []);
      setIsFirstFocus(false);
    } else {
      setTitle(" ");
      setIsFirstFocus(true);
    }
  }, []);

  // Auto-save map to localStorage on any change
  useEffect(() => {
    const mapData = { title, nodes };
    localStorage.setItem('mapify-current-map', JSON.stringify(mapData));
  }, [title, nodes]);

  const handleFocus = () => {
    if (isFirstFocus && title === " ") {
      setTitle('');
      setIsFirstFocus(false);
    }
  };

  const addNode = () => {
    setNodes([...nodes, '']);
  };

  const updateNode = (index, text) => {
    const updated = [...nodes];
    updated[index] = text;
    setNodes(updated);
  };

  const deleteNode = (index) => {
    setNodes(nodes.filter((_, i) => i !== index));
  };

  const clearMap = () => {
    setNodes([]);
    setTitle(" ");
    setIsFirstFocus(true);
    localStorage.removeItem('mapify-current-map');
  };

  const saveMap = () => {
    alert('Map saved!');
  };

  const exportMap = () => {
    const mapData = { title, nodes };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mapData, null, 2));
    const anchor = document.createElement('a');
    anchor.setAttribute("href", dataStr);
    anchor.setAttribute("download", `${title.replace(/\s+/g, '_') || 'mind_map'}.json`);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  return (
    <div className="create-map-container">
      <div className="map-toolbar">
        <input
          type="text"
          className="map-title-input"
          value={title}
          onFocus={handleFocus}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Give your map a name..."
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