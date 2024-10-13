import React from 'react'
import './index.css'

const DatesConComponent = props => {
  const {initialMonthsList, activeMonth, addEmojiUrl} = props

  const filteredData = initialMonthsList.filter(each => {
    return each.monthName === activeMonth
  })

  // Safeguard against empty or undefined lists to avoid runtime errors
  if (!initialMonthsList || initialMonthsList.length === 0) {
    return <p>No data available</p>
  }

  // Accessing the first id for logging
  console.log({id: initialMonthsList[0]?.dates[0]?.id})

  return (
    <div className="month-card">
      {filteredData.map(month => (
        // Use monthName as the key (or another unique identifier if available)
        <div key={month.monthName} className="dates-con">
          {month.dates.map(dateItem => (
            // Wrap the elements in a parent element with the unique key
            <div
              key={dateItem.id}
              className="date-item"
              onClick={() => addEmojiUrl(dateItem.id)}
            >
              <p>{dateItem.date}</p>

              <img src={dateItem.emojiUrl} alt={dateItem.emojiName} />
            </div>
          ))}
          <div className="date-item">
            <p>11</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png"
              className="emoji-displayed"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default DatesConComponent
