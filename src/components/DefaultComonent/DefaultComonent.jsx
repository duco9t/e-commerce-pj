
import HeaderComonent from '../HeaderComonent/HeaderComonent'

const DefaultComonent = ({children}) => {
  return (
    <div>
      <HeaderComonent/>
      {children}
    </div>
  )
}

export default DefaultComonent
