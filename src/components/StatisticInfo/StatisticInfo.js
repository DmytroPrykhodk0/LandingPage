import './StatisticInfo.css';


function StatisticInfo({number,description}) {
    return (
        <div className="statistic__item item">
            <span className="item__number">{number}</span>
            <span className="item__number-description">{description}</span>
        </div>
   );
 }
 
 export default StatisticInfo;