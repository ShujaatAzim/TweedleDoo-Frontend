import React from 'react';
import List from '../MainComponents/List';
import ItemFormContainer from '../ContainerComponents/ItemFormContainer';
import { useRecoilValue } from 'recoil';
import { currentListState } from '../Recoil/atoms';

const ListContainer = props => {

  const currentList = useRecoilValue(currentListState)

  let currentItems = currentList.items
  let completedItems = [...currentItems]
  completedItems = completedItems.filter(item => item.complete === true)

  return (
    <div>
      <div>
        <List currentItems={currentItems} {...props} />
      </div>
      <div>
        { currentItems.length === 0 ? <h3>No items! Add some below:</h3> : 
          completedItems.length !== currentItems.length ? <h3>You have { currentItems.length - completedItems.length} todos left!</h3> : 
          <h3>List complete! Yay!</h3> }
      </div>
      <div>
        <ItemFormContainer {...props} />
      </div>
    </div>
  );
}

export default ListContainer;
