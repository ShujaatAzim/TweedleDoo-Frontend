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
        { currentItems.length === 0 ? "No items! Add some below:" : 
          completedItems.length !== currentItems.length ? `You have ${ currentItems.length - completedItems.length} todos left!` : 
          "List complete! Yay!" }
      </div>
      <div>
        <ItemFormContainer {...props} />
      </div>
    </div>
  );
}

export default ListContainer;
