
function Filter(){

    return (
        <div>
            <form action ="http://localhost:9000/data" method="post">
                <input type="text" name="field" placeholder="enter field"></input>
                <input type="text" name="value" placeholder="value"></input>
                <button type="submit" name="submit">submit</button>
            </form>
        </div>
    );
}
export default Filter;