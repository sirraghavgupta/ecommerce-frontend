import React from 'react';
import classes from './CategoryDrawer.module.css';
import Aux from './Aux';
import Backdrop from './Backdrop';

const CategoryDrawer = (props) => {
  const {
    toggleHandler,
    showDrawer,
    categoryList,
    categoryClickHandler
  } = props;

  const categoryListItems = categoryList.map((category) => (
    <li
      key={category.id}
      className={classes.CategoryItem}
      onClick={() => categoryClickHandler(category.id)}
    >
      {category.name}
    </li>
  ));

  let styling = [classes.CategoryDrawer, classes.Closed];
  if (showDrawer) {
    styling = [classes.CategoryDrawer, classes.Open];
  }

  return (
    <Aux>
      {showDrawer && <Backdrop clicked={toggleHandler} />}

      <div className={styling.join(' ')}>
        <nav className={classes.CategoryNav}>
          <ul>{categoryListItems}</ul>
        </nav>
      </div>
    </Aux>
  );
};

export default CategoryDrawer;
