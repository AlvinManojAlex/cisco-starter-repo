import './exhibit.css';

function exhibit(data) {
    return (
        <div className="exhibit-container">
            <div className="exhibit-content">
                <p>{data.type}: {data.value}</p>
            </div>
        </div>
    );
}

export default exhibit;