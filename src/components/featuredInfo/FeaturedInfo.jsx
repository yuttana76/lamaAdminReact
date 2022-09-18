import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="fetaturedTitle">Revenue</span>
        <div className="feturedMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">-11.45 <ArrowDownwardIcon className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="fetaturedTitle">Sale</span>
        <div className="feturedMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">-1.45 <ArrowDownwardIcon className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="fetaturedTitle">Cost</span>
        <div className="feturedMoneyContainer">
          <span className="featuredMoney">$3,415</span>
          <span className="featuredMoneyRate">+2.45 <ArrowUpwardIcon className="featuredIcon"/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  )
}
