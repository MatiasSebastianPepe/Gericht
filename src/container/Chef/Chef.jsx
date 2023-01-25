import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Our menu features a variety of dishes that are sure to please any palate.</p>
        </div>
        <p className="p__opensans">Our signature dish is a succulent slow-roasted prime rib, served with creamy horseradish sauce and a side of tender roast potatoes. For seafood lovers, we offer a fresh catch of the day, expertly grilled and served with a lemon butter sauce. Vegetarians will enjoy our roasted eggplant stack, layered with creamy feta cheese and sun-dried tomatoes. And no meal is complete without a sweet finish, so be sure to save room for our decadent chocolate lava cake, served with a scoop of creamy vanilla bean ice cream. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;