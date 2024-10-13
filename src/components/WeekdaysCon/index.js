import React, {useState} from 'react'
import './index.css'

const WeekdaysCon = props => {
  const {daysList, emojisList} = props
  const [selectedDay, setSelectedDay] = useState('Sunday')
  const [selectedEmoji, setSelectedEmoji] = useState('Very Happy')

  const handleChange = e => {
    setSelectedDay(e.target.value)
  }

  return (
    <div className="drop-down-con">
      <div className="dropdowns">
        <select
          id="day-dropdown"
          value={selectedDay}
          onChange={handleChange}
          className="drop-down"
        >
          <option value="" disabled>
            -- Select a Day --
          </option>
          {daysList.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>

        <select
          id="emoji-dropdown"
          value={selectedDay}
          onChange={handleChange}
          className="drop-down"
        >
          <option value="" disabled>
            -- Select a Day --
          </option>
          {emojisList.map(emoji => (
            <option key={emoji.id} value={emoji.emojiName}>
              {emoji.emojiName}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default WeekdaysCon
