import React, { useEffect, useState } from 'react';
import './App.css';
import ListContainer from './components/ListContainer/ListContainer';
import Loader from './components/Loader/Loader';
import FailureView from './components/FailureView/FailureView';
import Header from './components/Header/Header';
import { API_STATUS, API_URL } from './constants/apiConstants';

function App() {
  const [apiStatus, setApiStatus] = useState(API_STATUS.INITIAL);
  const [lists, setLists] = useState({});
  const [selectedLists, setSelectedLists] = useState([]);
  const [creationMode, setCreationMode] = useState(false);
  const [newList, setNewList] = useState([]);

  const fetchLists = async () => {
    setApiStatus(API_STATUS.LOADING);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed');
      const data = await response.json();

      const listMap = {};
      data.lists.forEach(item => {
        if (!listMap[item.list_number]) {
          listMap[item.list_number] = [];
        }
        listMap[item.list_number].push(item);
      });

      setLists(listMap);
      setApiStatus(API_STATUS.SUCCESS);
    } catch {
      setApiStatus(API_STATUS.FAILURE);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const toggleCheck = id => {
    setSelectedLists(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const startCreation = () => {
    if (selectedLists.length !== 2) {
      alert('You should select exactly 2 lists to create a new list');
      return;
    }
    setCreationMode(true);
  };

  const handleMoveToNew = (item, fromList) => {
    setLists(prev => ({
      ...prev,
      [fromList]: prev[fromList].filter(i => i.id !== item.id),
    }));
    setNewList(prev => [...prev, item]);
  };

  const handleMoveFromNew = (item, toList) => {
    setNewList(prev => prev.filter(i => i.id !== item.id));
    setLists(prev => ({
      ...prev,
      [toList]: [...prev[toList], item],
    }));
  };

  const cancelCreation = () => {
    fetchLists();
    setCreationMode(false);
    setNewList([]);
    setSelectedLists([]);
  };

  const updateLists = () => {
    setCreationMode(false);
    setSelectedLists([]);
  };

  if (apiStatus === API_STATUS.LOADING) return <Loader />;
  if (apiStatus === API_STATUS.FAILURE) return <FailureView onRetry={fetchLists} />;

  if (!creationMode) {
    return (
      <div className="app">
        <Header />
        <button onClick={startCreation}>Create a new list</button>
        <div className="lists">
          {Object.entries(lists).map(([listId, items]) => (
            <ListContainer
              key={listId}
              listId={listId}
              title={`List ${listId}`}
              items={items}
              onCheck={toggleCheck}
              checked={selectedLists.includes(listId)}
              showArrows={false}
            />
          ))}
        </div>
      </div>
    );
  }

  const [listA, listB] = selectedLists;

  return (
    <div className="app">
      <Header />
      <div className="lists">
        <ListContainer
          title={`List ${listA}`}
          items={lists[listA] || []}
          listId={listA}
          showArrows
          onMoveRight={item => handleMoveToNew(item, listA)}
        />
        <ListContainer
          title="New List"
          items={newList}
          listId="new"
          showArrows
          onMoveLeft={item => handleMoveFromNew(item, listA)}
          onMoveRight={item => handleMoveFromNew(item, listB)}
        />
        <ListContainer
          title={`List ${listB}`}
          items={lists[listB] || []}
          listId={listB}
          showArrows
          onMoveLeft={item => handleMoveToNew(item, listB)}
        />
      </div>
      <div className="buttons">
        <button onClick={cancelCreation}>Cancel</button>
        <button onClick={updateLists}>Update</button>
      </div>
    </div>
  );
}

export default App;
