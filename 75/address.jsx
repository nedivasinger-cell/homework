
export default function Address(props){
    const {street, city, state, zip} = props;
    return (
        <div className="address">
            <div>{street}</div>
            <div>{city}, {state} {zip}</div>
        </div>
    );
};