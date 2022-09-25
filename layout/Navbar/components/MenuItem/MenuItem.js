import styles from "./MenuItem.styles"
const MenuItem = ({ children, text = "" }) => {
  return (
    <>
      <li>{text}</li>
      <style jsx>{styles}</style>
    </>
  )
}
export default MenuItem
