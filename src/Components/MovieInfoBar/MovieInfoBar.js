import React from "react"
import PropTypes from "prop-types"
import { calcTime, convertMoney } from "../../helpers"
import { Wrapper, Content } from "./MovieInfoBarStyle"

function MovieInfoBar({time, budget, revenue}) {
  return (
   <Wrapper>
       <Content>
            <div className="column">
                <p>Running Time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {budget === 0? "N/A": convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {revenue === 0 ? "N/A": convertMoney(revenue)}</p>
            </div>
       </Content>
   </Wrapper>
  )
}

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar