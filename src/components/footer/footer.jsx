import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
return (
  <footer>
<div class="middle">
      <div class="center">
        <ul className="footer-ul">
          <li><h3>Get to Know Us</h3></li>
          <li><Link to="/">Careers</Link></li>
          <li><Link to="/">About Amazon</Link></li>
          <li><Link to="/">Investor Relations</Link></li>
          <li><Link to="/">Amazon Devices</Link></li>
        </ul>
        <ul className="footer-ul">
          <li><h3>Make Money with Us</h3></li>
          <li><Link to="/">Sell on Amazon</Link></li>
          <li><Link to="/">Sell Your Services on Amazon</Link></li>
          <li><Link to="/">Sell on Amazon Business</Link></li>
          <li><Link to="/">Sell Your Apps on Amazon</Link></li>
          <li><Link to="/">Become an Affiliate</Link></li>
          <li><Link to="/">Advertise Your Products</Link></li>
          <li><Link to="/">Self-Publish with Us</Link></li>
          <li><Link to="/">Become an Amazon Vendor</Link></li>
          <li><Link to="/">Sell Your Subscription on Amazon</Link></li>
          <li><Link to="/">› See all</Link></li>
        </ul>
        <ul className="footer-ul">
          <li><h3>Amazon Payment Products</h3></li>
          <li><Link to="/">Amazon Rewards Visa Signature Cards</Link></li>
          <li><Link to="/">Amazon.com Store Card</Link></li>
          <li><Link to="/">Amazon.com Corporate Credit Line</Link></li>
          <li><Link to="/">Shop with Points</Link></li>
          <li><Link to="/">Credit Card Marketplace</Link></li>
          <li><Link to="/">Reload Your Balance</Link></li>
          <li><Link to="/">Amazon Currency Converter</Link></li>
        </ul>
        <ul className="footer-ul">
          <li><h3>Let Us Help You</h3></li>
          <li><Link to="/">Your Account</Link></li>
          <li><Link to="/">Your Orders</Link></li>
          <li><Link to="/">Shipping Rates &amp; Policies</Link></li>
          <li><Link to="/">Amazon Prime</Link></li>
          <li><Link to="/">Returns &amp; Replacements</Link></li>
          <li><Link to="/">Manage Your Content and Devices</Link></li>
          <li><Link to="/">Amazon Assistant</Link></li>
          <li><Link to="/">Help</Link></li>
        </ul>
      </div>

      <ul class="copy text-center">
        <li><Link to="/" class="logo"></Link></li>
        <li><Link to="/" class="select"><i class="fa fa-globe" aria-hidden="true"></i> English</Link></li>
        <li><Link to="/" class="select"><i class="flag-icon-us"></i>United States</Link></li>
      </ul>
    </div>

    <div class="bottom">
      <div class="center">
        <ul>
          <li><Link to="/">Amazon Music<br/><span>Stream millions<br/> of songs</span></Link></li>
          <li><Link to="/">AmazonFresh<br/><span>Groceries &amp; More<br/> Right To Your Door</span></Link></li>
          <li><Link to="/">Amazon Web Services<br/><span>Scalable Cloud<br/> Computing Services</span></Link></li>
          <li><Link to="/">East Dane<br/><span>Designer Men's<br/> Fashion</span></Link></li>
          <li><Link to="/">Prime Now<br/><span>FREE 2-Hour Delivery<br/> on Everyday Items</span></Link></li>
        </ul>

        <ul>
          <li><Link to="/">Amazon Drive<br/><span>Cloud storage<br/> from Amazon</span></Link></li>
          <li><Link to="/">AmazonGlobal<br/><span>Ship Orders<br/> Internationally</span></Link></li>
          <li><Link to="/">Audible<br/><span>Download<br/> Audio Books</span></Link></li>
          <li><Link to="/">Fabric<br/><span>Sewing, Quilting<br/> &amp; Knitting</span></Link></li>
          <li><Link to="/">Prime Photos<br/><span>Unlimited Photo Storage<br/> Free With Prime</span></Link></li>
          <li><Link to="/">Woot!<br/><span>Deals and <br/> Shenanigans</span></Link></li>
        </ul>

        <ul>
          <li><Link to="/">6pm<br/><span>Score deals<br/> on fashion brands</span></Link></li>
          <li><Link to="/">Home Services<br/><span>Handpicked Pros<br/> Happiness Guarantee</span></Link></li>
          <li><Link to="/">Book Depository<br/><span>Books With Free<br/> Delivery Worldwide</span></Link></li>
          <li><Link to="/">Goodreads<br/><span>Book reviews<br/> &amp; recommendations</span></Link></li>
          <li><Link to="/">Shopbop<br/><span>Designer<br/> Fashion Brands</span></Link></li>
          <li><Link to="/">Zappos<br/><span>Shoes &amp;<br/> Clothing</span></Link></li>
        </ul>

        <ul>
          <li><Link to="/">AbeBooks<br/><span>Books, art<br/> &amp; collectibles</span></Link></li>
          <li><Link to="/">Amazon Inspire<br/><span>Free Digital Educational<br/>  Resources</span></Link></li>
          <li><Link to="/">Box Office Mojo<br/><span>Find Movie<br/> Box Office Data</span></Link></li>
          <li><Link to="/">IMDb<br/><span>Movies, TV<br/> &amp; Celebrities</span></Link></li>
          <li><Link to="/">TenMarks.com<br/><span>Math Activities<br/> for Kids &amp; Schools</span></Link></li>
          <li><Link to="/">Souq.com<br/><span>Shop Online in<br/> the Middle East</span></Link></li>
        </ul>

        <ul>
          <li><Link to="/">ACX <br/><span>Audiobook Publishing<br/> Made Easy</span></Link></li>
          <li><Link to="/">Amazon Rapids<br/><span>Fun stories for<br/>  kids on the go</span></Link></li>
          <li><Link to="/">ComiXology<br/><span>Thousands of<br/> Digital Comics</span></Link></li>
          <li><Link to="/">IMDbPro<br/><span>Get Info Entertainment<br/> Professionals Need</span></Link></li>
          <li><Link to="/">Warehouse Deals<br/><span>Open-Box<br/> Discounts</span></Link></li>
          <li><Link to="/">Subscribe with Amazon<br/><span>Discover &amp; try<br/> subscription services</span></Link></li>
        </ul>

        <ul>
          <li><Link to="/">Alexa<br/><span>Actionable Analytics<br/> for the Web</span></Link></li>
          <li><Link to="/">Amazon Restaurants<br/><span>Food delivery from<br/> local restaurants</span></Link></li>
          <li><Link to="/">CreateSpace<br/><span>Indie Print Publishing<br/> Made Easy</span></Link></li>
          <li><Link to="/">Junglee.com<br/><span>Shop Online<br/> in India</span></Link></li>
          <li><Link to="/">Whispercast<br/><span>Discover &amp; Distribute<br/> Digital Content</span></Link></li>
        </ul>

        <ul>
          <li><Link to="/">Amazon Business<br/><span>Everything For<br/> Your Business</span></Link></li>
          <li><Link to="/">Amazon Video Direct<br/><span>Video Distribution<br/> Made Easy</span></Link></li>
          <li><Link to="/">DPReview<br/><span>Digital<br/> Photography</span></Link></li>
          <li><Link to="/">Kindle Direct Publishing<br/><span>Indie Digital Publishing<br/> Made Easy</span></Link></li>
          <li><Link href="#">Withoutabox<br/><span>Submit to<br/> Film Festivals</span></Link></li>
        </ul>
      </div> 
            <ul class="copy text-center">
          <li><Link to="/">Conditions of Use</Link></li>
          <li><Link to="/">Privacy Notice</Link></li>
          <li><Link to="/">Interest-Based Ads</Link></li>
          <li>&copy; 1996-2017, Amazon.com, Inc. or its affiliates</li>
        </ul>
    </div>
    </footer>
)
        
}

export default Footer