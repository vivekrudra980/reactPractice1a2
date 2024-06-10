import './index.css'

const TabItem = props => {
  const {details, isActive, makeActive} = props
  const {buttonText, id} = details
  const btnClassName = isActive === true ? 'btn active' : 'btn'

  const onMakeActive = () => {
    makeActive(id)
  }

  return (
    <li className="item">
      <button className={btnClassName} type="button" onClick={onMakeActive}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
