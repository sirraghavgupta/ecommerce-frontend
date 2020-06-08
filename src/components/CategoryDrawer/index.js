import React from 'react';
import classes from './CategoryDrawer.module.css';
import Aux from '../../hoc/Aux';
import Backdrop from '../UI/Backdrop';

const CategoryDrawer = (props) => {
  const {
    toggleHandler,
    showDrawer,
    categories,
    categoryClickHandler,
    backHandler
  } = props;

  const categoryListItems = categories.map((category) => {
    return (
      <li
        key={category.id}
        className={classes.CategoryItem}
        onClick={() => categoryClickHandler(category.id)}
      >
        {category.name}
      </li>
    );
  });

  let grandParentId = null;
  if (categories.length > 0) {
    if (categories[0].hasOwnProperty('parent')) {
      if (categories[0].parent.hasOwnProperty('parent')) {
        grandParentId = categories[0].parent.parent.id;
      }
    }
  }

  let backOption = (
    <li
      key="backOption"
      className={classes.CategoryItem}
      onClick={() => {
        backHandler(grandParentId);
      }}
    >
      Back
    </li>
  );

  if (categories.length > 0 && !categories[0].hasOwnProperty('parent')) {
    backOption = null;
  }

  let styling = [classes.CategoryDrawer, classes.Closed];
  if (showDrawer) {
    styling = [classes.CategoryDrawer, classes.Open];
  }

  return (
    <Aux>
      {showDrawer && <Backdrop clicked={toggleHandler} />}

      <div className={styling.join(' ')}>
        <nav className={classes.CategoryNav}>
          <ul>
            {categoryListItems}
            {backOption}
          </ul>
        </nav>
      </div>
    </Aux>
  );
};

export default CategoryDrawer;
