import React from 'react'
import './index.css'
import {useState} from 'react'
import Navbar from '../Navbar'
import EmojiCon from '../EmojiCon'
import DatesConComponent from '../DatesConComponent'
import WeekdaysCon from '../WeekdaysCon'


const Home = ({data, emojisList, daysList}) => {
  const [activeEmoji, setActiveEmoji] = useState(emojisList[0].id)
  const [activeMonth, setActiveMonth] = useState('January')

  const handleActive = idd => {
    setActiveEmoji(idd)
  }

  const addEmojiUrl = id => {
    // Loop through the months and find the date with the matching id
    let filteredDate = null

    for (const month of data) {
      filteredDate = month.dates.find(dateItem => dateItem.id === id)
      if (filteredDate) {
        const requiredData = emojisList.find(each => {
          return each.id === activeEmoji
        })
        console.log(requiredData)
        filteredDate.emojiName = requiredData.emojiName
        filteredDate.emojiUrl = requiredData.emojiUrl
        console.log('filteredDate', filteredDate)

        console.log(requiredData.emojiName)

        break // Stop searching once the date is found
      }
    }
  }

  const leng = data.length
  console.log('active emoji', emojisList[0].id)
  return (
    <div className="home-con">
      <Navbar />
      <div>
        <h1 className="title">Moods in a Month</h1>
        <div className="emoji-desc-con">
          {emojisList.map(each => (
            <EmojiCon
              data={each}
              key={each.id}
              activeEmoji={activeEmoji}
              handleActive={setActiveEmoji}
            />
          ))}
        </div>
      </div>
      <DatesConComponent
        initialMonthsList={data}
        activeMonth={activeMonth}
        addEmojiUrl={addEmojiUrl}
      />
      <WeekdaysCon daysList={daysList} emojisList={emojisList} />
    </div>
  )
}

export default Home
