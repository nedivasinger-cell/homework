export default function Sidebar() {
  return (
    <div id="sidebar">
      <form id="searchForm">
        <input id="search" type="text" required />
        <button>go</button>
      </form>
      <hr />
      <ul id="places"></ul>
    </div>
  )
}