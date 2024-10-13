import React from 'react'
import './index.css'

const EmojiCon = props => {
  console.log('props', props)
  const {activeEmoji, data, handleActive} = props
  const {emojiName, emojiUrl, id} = data
  console.log(id, activeEmoji)

  const toApply = id === activeEmoji ? 'emojiImg-clicked' : 'emojiImg'
  console.log(toApply)
  return (
    <div className="emoji-box">
      <p>{emojiName}</p>
      <img
        src={emojiUrl}
        className={`${toApply}`}
        alt={emojiName}
        onClick={() => handleActive(id)}
      />
    </div>
  )
}

export default EmojiCon
