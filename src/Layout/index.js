import React, { useState } from 'react';
import Toolbar from '../Toolbar';
import Aux from '../Aux';
import CategoryDrawer from '../CategoryDrawer';
import Main from '../Main';

/**
 * this is a component which contains the top toolbar and the sidebar for
 * categories. it will be the main default component of the page.
 */
const Layout = (props) => {
  const { children } = props;

  const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);
  const [categoryList, setCategoryList] = useState([
    { id: '100', name: 'women' },
    { id: '200', name: 'kids' },
    { id: '300', name: 'mobiles' },
    { id: '400', name: 'electronics' },
    { id: '500', name: 'kitchen' },
    { id: '600', name: 'fashion' },
    { id: '700', name: 'books' },
    { id: '800', name: 'men' },
    { id: '900', name: 'home and decor' },
    { id: '1000', name: 'accessories' },
    { id: '1100', name: 'kitchen' },
    { id: '1200', name: 'fashion' },
    { id: '1300', name: 'books' },
    { id: '1400', name: 'home and decor' },
    { id: '1500', name: 'accessories' }
  ]);

  const categoryDrawerToggleHandler = () => {
    console.log('clicked');
    setShowCategoryDrawer((showDrawer) => !showDrawer);
  };

  const categoryClickHandler = (id) => {
    console.log('category clicked with id - ', id);
  };

  return (
    <Aux>
      <Toolbar toggleCategoryBar={categoryDrawerToggleHandler} />

      {/* <Toolbar toggleCategoryBar={categoryDrawerToggleHandler} /> */}

      <CategoryDrawer
        toggleHandler={categoryDrawerToggleHandler}
        showDrawer={showCategoryDrawer}
        categoryList={categoryList}
        categoryClickHandler={categoryClickHandler}
      />
      <Main>{children}</Main>
    </Aux>
  );
};

export default Layout;
