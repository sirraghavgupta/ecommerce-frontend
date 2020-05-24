import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Aux from './Aux';
import CategoryDrawer from './CategoryDrawer';
import Main from './Main';

/**
 * this is a component which contains the top toolbar and the sidebar for
 * categories. it will be the main default component of the page.
 */
const Layout = () => {
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

      <CategoryDrawer
        toggleHandler={categoryDrawerToggleHandler}
        showDrawer={showCategoryDrawer}
        categoryList={categoryList}
        categoryClickHandler={categoryClickHandler}
      />
      <Main>
        <p>
          Old unsatiable our now but considered travelling impression. In excuse
          hardly summer in basket misery. By rent an part need. At wrong of of
          water those linen. Needed oppose seemed how all. Very mrs shed shew
          gave you. Oh shutters do removing reserved wandered an. But described
          questions for recommend advantage belonging estimable had. Pianoforte
          reasonable as so am inhabiting. Chatty design remark and his abroad
          figure but its. Sportsman do offending supported extremity breakfast
          by listening. Decisively advantages nor expression unpleasing she led
          met. Estate was tended ten boy nearer seemed. As so seeing latter he
          should thirty whence. Steepest speaking up attended it as. Made neat
          an on be gave show snug tore. Affronting everything discretion men now
          own did. Still round match we to. Frankness pronounce daughters
          remainder extensive has but. Happiness cordially one determine
          concluded fat. Plenty season beyond by hardly giving of. Consulted or
          acuteness dejection an smallness if. Outward general passage another
          as it. Very his are come man walk one next. Delighted prevailed
          supported too not remainder perpetual who furnished. Nay affronting
          bed projection compliment instrument. Rooms oh fully taken by worse
          do. Points afraid but may end law lasted. Was out laughter raptures
          returned outweigh. Luckily cheered colonel me do we attacks on highest
          enabled. Tried law yet style child. Bore of true of no be deal.
          Frequently sufficient in be unaffected. The furnished she concluded
          depending procuring concealed. Dashwood contempt on mr unlocked
          resolved provided of of. Stanhill wondered it it welcomed oh. Hundred
          no prudent he however smiling at an offence. If earnestly extremity he
          he propriety something admitting convinced ye. Pleasant in to although
          as if differed horrible. Mirth his quick its set front enjoy hoped had
          there. Who connection imprudence middletons too but increasing
          celebrated principles joy. Herself too improve gay winding ask expense
          are compact. New all paid few hard pure she. Lose eyes get fat shew.
          Winter can indeed letter oppose way change tended now. So is improve
          my charmed picture exposed adapted demands. Received had end produced
          prepared diverted strictly off man branched. Known ye money so large
          decay voice there to. Preserved be mr cordially incommode as an. He
          doors quick child an point at. Had share vexed front least style off
          why him. His having within saw become ask passed misery giving.
          Recommend questions get too fulfilled. He fact in we case miss sake.
          Entrance be throwing he do blessing up. Hearts warmth in genius do
          garden advice mr it garret. Collected preserved are middleton
          dependent residence but him how. Handsome weddings yet mrs you has
          carriage packages. Preferred joy agreement put continual elsewhere
          delivered now. Mrs exercise felicity had men speaking met. Rich deal
          mrs part led pure will but. He share of first to worse. Weddings and
          any opinions suitable smallest nay. My he houses or months settle
          remove ladies appear. Engrossed suffering supposing he recommend do
          eagerness. Commanded no of depending extremity recommend attention
          tolerably. Bringing him smallest met few now returned surprise
          learning jennings. Objection delivered eagerness he exquisite at do
          in. Warmly up he nearer mr merely me. To they four in love. Settling
          you has separate supplied bed. Concluded resembled suspected his
          resources curiosity joy. Led all cottage met enabled attempt through
          talking delight. Dare he feet my tell busy. Considered imprudence of
          he friendship boisterous. Of resolve to gravity thought my prepare
          chamber so. Unsatiable entreaties collecting may sympathize nay
          interested instrument. If continue building numerous of at relation in
          margaret. Lasted engage roused mother an am at. Other early while if
          by do to. Missed living excuse as be. Cause heard fat above first
          shall for. My smiling to he removal weather on anxious. Old unsatiable
          our now but considered travelling impression. In excuse hardly summer
          in basket misery. By rent an part need. At wrong of of water those
          linen. Needed oppose seemed how all. Very mrs shed shew gave you. Oh
          shutters do removing reserved wandered an. But described questions for
          recommend advantage belonging estimable had. Pianoforte reasonable as
          so am inhabiting. Chatty design remark and his abroad figure but its.
          Sportsman do offending supported extremity breakfast by listening.
          Decisively advantages nor expression unpleasing she led met. Estate
          was tended ten boy nearer seemed. As so seeing latter he should thirty
          whence. Steepest speaking up attended it as. Made neat an on be gave
          show snug tore. Affronting everything discretion men now own did.
          Still round match we to. Frankness pronounce daughters remainder
          extensive has but. Happiness cordially one determine concluded fat.
          Plenty season beyond by hardly giving of. Consulted or acuteness
          dejection an smallness if. Outward general passage another as it. Very
          his are come man walk one next. Delighted prevailed supported too not
          remainder perpetual who furnished. Nay affronting bed projection
          compliment instrument. Rooms oh fully taken by worse do. Points afraid
          but may end law lasted. Was out laughter raptures returned outweigh.
          Luckily cheered colonel me do we attacks on highest enabled. Tried law
          yet style child. Bore of true of no be deal. Frequently sufficient in
          be unaffected. The furnished she concluded depending procuring
          concealed. Dashwood contempt on mr unlocked resolved provided of of.
          Stanhill wondered it it welcomed oh. Hundred no prudent he however
          smiling at an offence. If earnestly extremity he he propriety
          something admitting convinced ye. Pleasant in to although as if
          differed horrible. Mirth his quick its set front enjoy hoped had
          there. Who connection imprudence middletons too but increasing
          celebrated principles joy. Herself too improve gay winding ask expense
          are compact. New all paid few hard pure she. Lose eyes get fat shew.
          Winter can indeed letter oppose way change tended now. So is improve
          my charmed picture exposed adapted demands. Received had end produced
          prepared diverted strictly off man branched. Known ye money so large
          decay voice there to. Preserved be mr cordially incommode as an. He
          doors quick child an point at. Had share vexed front least style off
          why him. His having within saw become ask passed misery giving.
          Recommend questions get too fulfilled. He fact in we case miss sake.
          Entrance be throwing he do blessing up. Hearts warmth in genius do
          garden advice mr it garret. Collected preserved are middleton
          dependent residence but him how. Handsome weddings yet mrs you has
          carriage packages. Preferred joy agreement put continual elsewhere
          delivered now. Mrs exercise felicity had men speaking met. Rich deal
          mrs part led pure will but. He share of first to worse. Weddings and
          any opinions suitable smallest nay. My he houses or months settle
          remove ladies appear. Engrossed suffering supposing he recommend do
          eagerness. Commanded no of depending extremity recommend attention
          tolerably. Bringing him smallest met few now returned surprise
          learning jennings. Objection delivered eagerness he exquisite at do
          in. Warmly up he nearer mr merely me. To they four in love. Settling
          you has separate supplied bed. Concluded resembled suspected his
          resources curiosity joy. Led all cottage met enabled attempt through
          talking delight. Dare he feet my tell busy. Considered imprudence of
          he friendship boisterous. Of resolve to gravity thought my prepare
          chamber so. Unsatiable entreaties collecting may sympathize nay
          interested instrument. If continue building numerous of at relation in
          margaret. Lasted engage roused mother an am at. Other early while if
          by do to. Missed living excuse as be. Cause heard fat above first
          shall for. My smiling to he removal weather on anxious.
        </p>
      </Main>
    </Aux>
  );
};

export default Layout;
