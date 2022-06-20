import "./SideMenu.css";

export default function SideMenu(){
  return (
    <div className="SideBar">
      <ul>
        <li>
          <span className='categoria'>NOME DA CATEGORIA</span>
          <button onClick={() => console.log('clicou')} >
                DIA TRYBE TITULO
          </button>
        </li>
      </ul>
    </div>
  )
}