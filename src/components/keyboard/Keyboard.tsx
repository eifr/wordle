import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="ק" onClick={onClick} status={charStatuses['ק']} />
        <Key value="ר" onClick={onClick} status={charStatuses['ר']} />
        <Key value="א" onClick={onClick} status={charStatuses['א']} />
        <Key value="ט" onClick={onClick} status={charStatuses['ט']} />
        <Key value="ו" onClick={onClick} status={charStatuses['ו']} />
        <Key value="ן" onClick={onClick} status={charStatuses['ן']} />
        <Key value="ם" onClick={onClick} status={charStatuses['ם']} />
        <Key value="פ" onClick={onClick} status={charStatuses['פ']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="ש" onClick={onClick} status={charStatuses['ש']} />
        <Key value="ד" onClick={onClick} status={charStatuses['ד']} />
        <Key value="ג" onClick={onClick} status={charStatuses['ג']} />
        <Key value="כ" onClick={onClick} status={charStatuses['כ']} />
        <Key value="ע" onClick={onClick} status={charStatuses['ע']} />
        <Key value="י" onClick={onClick} status={charStatuses['י']} />
        <Key value="ח" onClick={onClick} status={charStatuses['ח']} />
        <Key value="ל" onClick={onClick} status={charStatuses['ל']} />
        <Key value="ך" onClick={onClick} status={charStatuses['ך']} />
        <Key value="ף" onClick={onClick} status={charStatuses['ף']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key value="ז" onClick={onClick} status={charStatuses['ז']} />
        <Key value="ס" onClick={onClick} status={charStatuses['ס']} />
        <Key value="ב" onClick={onClick} status={charStatuses['ב']} />
        <Key value="ה" onClick={onClick} status={charStatuses['ה']} />
        <Key value="נ" onClick={onClick} status={charStatuses['נ']} />
        <Key value="מ" onClick={onClick} status={charStatuses['מ']} />
        <Key value="צ" onClick={onClick} status={charStatuses['צ']} />
        <Key value="ת" onClick={onClick} status={charStatuses['ת']} />
        <Key value="ץ" onClick={onClick} status={charStatuses['ץ']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  )
}
