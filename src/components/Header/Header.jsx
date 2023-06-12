import "./Header.css"

export function Header({ headerInfo }) {
  return (
    <header className="header">
      <h1 className="title">{headerInfo.title}</h1>
      <h4 className="tagline">{headerInfo.tagline}</h4>
      <p className="description">{headerInfo.description}</p>
    </header>
  )
}

export default Header
