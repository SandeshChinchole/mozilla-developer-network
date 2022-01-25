
const rootElement = document.getElementById('root');

function Greeting() {
    const [name, setName] = React.useState(
        () => window.localStorage.getItem('name') || ''
    );
    const handleChange = event => setName(event.target.value);

    React.useEffect(() => {
        window.localStorage.setItem('name', name);
    });

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>{name}</strong> : 'Please enter a name'}
        </div>
    )
}
ReactDOM.render(<Greeting />, rootElement);