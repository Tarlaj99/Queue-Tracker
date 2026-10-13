export default function Header(){
    return (
        <header>
            <h1 className = 'title'>Queue Tracker</h1>
            <div style={{border: '2px solid black', display: 'flex', alignItems: 'center'}}>
                <input type="checkbox" id="dark-mode-toggle" />
                <label for="dark-mode-toggle" class="toggle"></label>
            </div>
        </header>
    )
}